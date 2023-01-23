--
-- PostgreSQL database dump
--

-- Dumped from database version 12.12 (Ubuntu 12.12-0ubuntu0.20.04.1)
-- Dumped by pg_dump version 12.12 (Ubuntu 12.12-0ubuntu0.20.04.1)

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

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: genres; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.genres (
    id integer NOT NULL,
    name text NOT NULL
);


--
-- Name: genres_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.genres_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: genres_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.genres_id_seq OWNED BY public.genres.id;


--
-- Name: movies; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.movies (
    id integer NOT NULL,
    title text NOT NULL,
    image text NOT NULL,
    iswatched boolean DEFAULT false NOT NULL,
    stars integer NOT NULL,
    "plataformId" integer NOT NULL,
    "genreId" integer NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL,
    description text NOT NULL,
    CONSTRAINT stars_check CHECK (((stars > 0) AND (stars < 6)))
);


--
-- Name: movies_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.movies_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: movies_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.movies_id_seq OWNED BY public.movies.id;


--
-- Name: plataforms; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.plataforms (
    id integer NOT NULL,
    name text NOT NULL,
    image text NOT NULL
);


--
-- Name: plataforms_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.plataforms_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: plataforms_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.plataforms_id_seq OWNED BY public.plataforms.id;


--
-- Name: genres id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.genres ALTER COLUMN id SET DEFAULT nextval('public.genres_id_seq'::regclass);


--
-- Name: movies id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.movies ALTER COLUMN id SET DEFAULT nextval('public.movies_id_seq'::regclass);


--
-- Name: plataforms id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.plataforms ALTER COLUMN id SET DEFAULT nextval('public.plataforms_id_seq'::regclass);


--
-- Data for Name: genres; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.genres VALUES (2, 'Horror');
INSERT INTO public.genres VALUES (3, 'Adventure');
INSERT INTO public.genres VALUES (4, 'Comedy');
INSERT INTO public.genres VALUES (5, 'Science fiction');
INSERT INTO public.genres VALUES (6, 'Drama');


--
-- Data for Name: movies; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.movies VALUES (92, 'Avatar', 'https://lumiere-a.akamaihd.net/v1/images/1_avtr-226_ec8e6081.jpeg', false, 4, 5, 4, '2023-01-22 22:00:46.498027', 'aaaaa');
INSERT INTO public.movies VALUES (93, 'Avatar 2', 'https://lumiere-a.akamaihd.net/v1/images/1_avtr-226_ec8e6081.jpeg', false, 4, 5, 4, '2023-01-22 22:00:49.6586', 'aaaaa');
INSERT INTO public.movies VALUES (95, 'teste', 'https://lumiere-a.akamaihd.net/v1/images/1_avtr-226_ec8e6081.jpeg', false, 4, 2, 3, '2023-01-22 22:01:01.491548', 'aaaaa');


--
-- Data for Name: plataforms; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.plataforms VALUES (2, 'Netflix', 'https://www.tudoemdia.com/wp-content/uploads/2022/08/netflix-logo.jpg');
INSERT INTO public.plataforms VALUES (3, 'Prime Video', 'https://m.media-amazon.com/images/G/01/primevideo/seo/primevideo-seo-logo.png');
INSERT INTO public.plataforms VALUES (4, 'Star+', 'https://static-assets.bamgrid.com/product/starplus/images/share-default.d72cf588f6d06cba22171f5ae44289d3.png');
INSERT INTO public.plataforms VALUES (5, 'Disney+', 'https://pop.proddigital.com.br/wp-content/uploads/sites/8/2022/06/disney-plus.jpg');


--
-- Name: genres_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.genres_id_seq', 6, true);


--
-- Name: movies_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.movies_id_seq', 95, true);


--
-- Name: plataforms_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.plataforms_id_seq', 5, true);


--
-- Name: genres genres_name_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.genres
    ADD CONSTRAINT genres_name_key UNIQUE (name);


--
-- Name: genres genres_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.genres
    ADD CONSTRAINT genres_pkey PRIMARY KEY (id);


--
-- Name: movies movies_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.movies
    ADD CONSTRAINT movies_pkey PRIMARY KEY (id);


--
-- Name: plataforms plataforms_name_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.plataforms
    ADD CONSTRAINT plataforms_name_key UNIQUE (name);


--
-- Name: plataforms plataforms_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.plataforms
    ADD CONSTRAINT plataforms_pkey PRIMARY KEY (id);


--
-- Name: movies movies_genreId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.movies
    ADD CONSTRAINT "movies_genreId_fkey" FOREIGN KEY ("genreId") REFERENCES public.genres(id);


--
-- Name: movies movies_plataformId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.movies
    ADD CONSTRAINT "movies_plataformId_fkey" FOREIGN KEY ("plataformId") REFERENCES public.plataforms(id);


--
-- PostgreSQL database dump complete
--

