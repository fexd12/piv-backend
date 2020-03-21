--DATABASE : POSTGRESQL

-- Database: pi_v

-- DROP DATABASE pi_v;

CREATE DATABASE pi_v
    WITH 
    OWNER = postgres
    ENCODING = 'UTF8'
    LC_COLLATE = 'Portuguese_Brazil.1252'
    LC_CTYPE = 'Portuguese_Brazil.1252'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1;

-- Table: public.tags

-- DROP TABLE public.tags;

CREATE TABLE public.tags
(
    id integer NOT NULL,
    tag text COLLATE pg_catalog."default" NOT NULL,
    state integer,
    created_at date,
    update_at date,
    CONSTRAINT tags_pkey PRIMARY KEY (id)
        INCLUDE(id)
)

TABLESPACE pg_default;

ALTER TABLE public.tags
    OWNER to postgres;


-- Table: public.users

-- DROP TABLE public.users;

CREATE TABLE public.users
(
    id integer NOT NULL,
    name character(200) COLLATE pg_catalog."default" NOT NULL,
    created_at date,
    update_at date,
    CONSTRAINT users_pkey PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE public.users
    OWNER to postgres;

-- Table: public.users_tag

-- DROP TABLE public.users_tag;

CREATE TABLE public.users_tag
(
    id integer NOT NULL,
    id_tag integer,
    id_users integer,
    CONSTRAINT id PRIMARY KEY (id)
        INCLUDE(id),
    CONSTRAINT id_tag FOREIGN KEY (id_tag)
        REFERENCES public.tags (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID,
    CONSTRAINT id_users FOREIGN KEY (id_users)
        REFERENCES public.users (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)

TABLESPACE pg_default;

ALTER TABLE public.users_tag
    OWNER to postgres;

-- SEQUENCE: public.tag_sequence

-- DROP SEQUENCE public.tag_sequence;

CREATE SEQUENCE public.tag_sequence
    INCREMENT 1
    START 1
    MINVALUE 0
    MAXVALUE 9223372036854775807
    CACHE 1;

ALTER SEQUENCE public.tag_sequence
    OWNER TO postgres;

-- SEQUENCE: public.users_sequence

-- DROP SEQUENCE public.users_sequence;

CREATE SEQUENCE public.users_sequence
    INCREMENT 1
    START 1
    MINVALUE 1
    MAXVALUE 9223372036854775807
    CACHE 1;

ALTER SEQUENCE public.users_sequence
    OWNER TO postgres;

-- SEQUENCE: public.users_tag_sequence

-- DROP SEQUENCE public.users_tag_sequence;

CREATE SEQUENCE public.users_tag_sequence
    INCREMENT 1
    START 1
    MINVALUE 1
    MAXVALUE 9223372036854775807
    CACHE 1;

ALTER SEQUENCE public.users_tag_sequence
    OWNER TO postgres;

ALTER TABLE public.users_tag
    ADD COLUMN acesso integer;