--
-- PostgreSQL database dump
--

-- Dumped from database version 12.2
-- Dumped by pg_dump version 12.2

-- Started on 2020-04-07 10:19:11

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 209 (class 1259 OID 16470)
-- Name: agendamento_sequence; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.agendamento_sequence
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.agendamento_sequence OWNER TO postgres;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 211 (class 1259 OID 16481)
-- Name: agendamento; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.agendamento (
    id integer DEFAULT nextval('public.agendamento_sequence'::regclass) NOT NULL,
    sala_id integer NOT NULL,
    users_tags_id integer NOT NULL,
    data timestamp(6) with time zone NOT NULL,
    data_inicial timestamp(6) with time zone NOT NULL,
    data_final timestamp(6) with time zone NOT NULL
);


ALTER TABLE public.agendamento OWNER TO postgres;

--
-- TOC entry 208 (class 1259 OID 16468)
-- Name: sala_sequence; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.sala_sequence
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.sala_sequence OWNER TO postgres;

--
-- TOC entry 210 (class 1259 OID 16475)
-- Name: sala; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.sala (
    id integer DEFAULT nextval('public.sala_sequence'::regclass) NOT NULL,
    nome character(200) NOT NULL,
    quantidade integer NOT NULL,
    status character(1) NOT NULL
);


ALTER TABLE public.sala OWNER TO postgres;

--
-- TOC entry 203 (class 1259 OID 16409)
-- Name: tag_sequence; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.tag_sequence
    START WITH 1
    INCREMENT BY 1
    MINVALUE 0
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.tag_sequence OWNER TO postgres;

--
-- TOC entry 207 (class 1259 OID 16460)
-- Name: tags; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.tags (
    id integer DEFAULT nextval('public.tag_sequence'::regclass) NOT NULL,
    tag text NOT NULL,
    created_at date,
    update_at date,
    status character(1) NOT NULL
);


ALTER TABLE public.tags OWNER TO postgres;

--
-- TOC entry 205 (class 1259 OID 16446)
-- Name: users_sequence; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.users_sequence
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.users_sequence OWNER TO postgres;

--
-- TOC entry 202 (class 1259 OID 16394)
-- Name: users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.users (
    id integer DEFAULT nextval('public.users_sequence'::regclass) NOT NULL,
    name character(200) NOT NULL,
    email character(200) NOT NULL,
    status character(1) NOT NULL
);


ALTER TABLE public.users OWNER TO postgres;

--
-- TOC entry 206 (class 1259 OID 16448)
-- Name: users_tag_sequence; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.users_tag_sequence
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.users_tag_sequence OWNER TO postgres;

--
-- TOC entry 204 (class 1259 OID 16426)
-- Name: users_tag; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.users_tag (
    id integer DEFAULT nextval('public.users_tag_sequence'::regclass) NOT NULL,
    id_tag integer,
    id_users integer,
    acesso integer
);


ALTER TABLE public.users_tag OWNER TO postgres;

--
-- TOC entry 2865 (class 0 OID 16481)
-- Dependencies: 211
-- Data for Name: agendamento; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.agendamento (id, sala_id, users_tags_id, data, data_inicial, data_final) FROM stdin;
2	1	1	2020-04-08 00:00:00-03	2020-04-06 19:02:00-03	2020-04-06 19:08:00-03
\.


--
-- TOC entry 2864 (class 0 OID 16475)
-- Dependencies: 210
-- Data for Name: sala; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.sala (id, nome, quantidade, status) FROM stdin;
1	teste                                                                                                                                                                                                   	10	a
\.


--
-- TOC entry 2861 (class 0 OID 16460)
-- Dependencies: 207
-- Data for Name: tags; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.tags (id, tag, created_at, update_at, status) FROM stdin;
1	a1111	\N	\N	a
\.


--
-- TOC entry 2856 (class 0 OID 16394)
-- Dependencies: 202
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.users (id, name, email, status) FROM stdin;
1	felipe                                                                                                                                                                                                  	felipe.demelo@hotmail.com                                                                                                                                                                               	a
11	testeee                                                                                                                                                                                                 	teste                                                                                                                                                                                                   	s
10	fee                                                                                                                                                                                                     	wsaddas                                                                                                                                                                                                 	a
\.


--
-- TOC entry 2858 (class 0 OID 16426)
-- Dependencies: 204
-- Data for Name: users_tag; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.users_tag (id, id_tag, id_users, acesso) FROM stdin;
1	1	1	1
\.


--
-- TOC entry 2871 (class 0 OID 0)
-- Dependencies: 209
-- Name: agendamento_sequence; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.agendamento_sequence', 6, true);


--
-- TOC entry 2872 (class 0 OID 0)
-- Dependencies: 208
-- Name: sala_sequence; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.sala_sequence', 1, true);


--
-- TOC entry 2873 (class 0 OID 0)
-- Dependencies: 203
-- Name: tag_sequence; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.tag_sequence', 1, true);


--
-- TOC entry 2874 (class 0 OID 0)
-- Dependencies: 205
-- Name: users_sequence; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.users_sequence', 11, true);


--
-- TOC entry 2875 (class 0 OID 0)
-- Dependencies: 206
-- Name: users_tag_sequence; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.users_tag_sequence', 8, true);


--
-- TOC entry 2726 (class 2606 OID 16486)
-- Name: agendamento agendamento_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.agendamento
    ADD CONSTRAINT agendamento_pkey PRIMARY KEY (id);


--
-- TOC entry 2720 (class 2606 OID 16430)
-- Name: users_tag id; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users_tag
    ADD CONSTRAINT id PRIMARY KEY (id) INCLUDE (id);


--
-- TOC entry 2724 (class 2606 OID 16480)
-- Name: sala sala_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.sala
    ADD CONSTRAINT sala_pkey PRIMARY KEY (id);


--
-- TOC entry 2722 (class 2606 OID 16467)
-- Name: tags tags_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_pkey PRIMARY KEY (id) INCLUDE (id);


--
-- TOC entry 2718 (class 2606 OID 16398)
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- TOC entry 2728 (class 2606 OID 16487)
-- Name: agendamento agendamento_sala_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.agendamento
    ADD CONSTRAINT agendamento_sala_id_fkey FOREIGN KEY (sala_id) REFERENCES public.sala(id);


--
-- TOC entry 2729 (class 2606 OID 16527)
-- Name: agendamento agendamento_users_tags__id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.agendamento
    ADD CONSTRAINT agendamento_users_tags__id_fkey FOREIGN KEY (users_tags_id) REFERENCES public.users_tag(id) NOT VALID;


--
-- TOC entry 2727 (class 2606 OID 16436)
-- Name: users_tag id_users; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users_tag
    ADD CONSTRAINT id_users FOREIGN KEY (id_users) REFERENCES public.users(id);


-- Completed on 2020-04-07 10:19:11

--
-- PostgreSQL database dump complete
--

