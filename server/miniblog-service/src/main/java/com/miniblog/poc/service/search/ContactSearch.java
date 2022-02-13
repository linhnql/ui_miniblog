package com.miniblog.poc.service.search;

import com.miniblog.poc.service.entity.ContactEntity;
import lombok.AllArgsConstructor;
import org.hibernate.search.jpa.FullTextEntityManager;
import org.hibernate.search.jpa.FullTextQuery;
import org.hibernate.search.jpa.Search;
import org.hibernate.search.query.dsl.BooleanJunction;
import org.hibernate.search.query.dsl.QueryBuilder;
import org.springframework.stereotype.Service;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import java.util.List;

@Service
@AllArgsConstructor
public class ContactSearch {
    private static final String NAME = "name";
    private static final String EMAIL = "email";
    private static final String MESSENGER = "messenger";
    private static final String SENT_AT = "time";

    private EntityManager entityManager;
    private final EntityManagerFactory entityManagerFactory;

    public List<ContactEntity> searchContact(String searchTerm) {

        entityManager = entityManagerFactory.createEntityManager();

        FullTextEntityManager fullTextEntityManager = initializedFullTextEntityManager();

        QueryBuilder qb = fullTextEntityManager.getSearchFactory()
                .buildQueryBuilder().forEntity(ContactEntity.class ).get();

        BooleanJunction<BooleanJunction> booleanJunction =
                HibernateSearchUtil.buildBooleanJunctionSearch(
                        qb,
                        searchTerm,
                        NAME,
                        EMAIL,
                        MESSENGER,
                        SENT_AT);

        FullTextQuery query =
                fullTextEntityManager.createFullTextQuery(booleanJunction.createQuery(), ContactEntity.class);

        List<ContactEntity> contactEntities = query.getResultList();

        commitTransaction();

        return contactEntities;
    }

    private FullTextEntityManager initializedFullTextEntityManager() {

        FullTextEntityManager fullTextEntityManager = Search.getFullTextEntityManager(entityManager);

        entityManager.getTransaction().begin();

        return fullTextEntityManager;
    }

    private void commitTransaction() {
        entityManager.getTransaction().commit();
        entityManager.close();
    }
}
