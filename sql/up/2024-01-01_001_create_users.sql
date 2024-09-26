create extension if not exists "uuid-ossp";

create table users(
    id uuid default uuid_generate_v4(),
    user_name varchar(256) not null,
    password varchar(1024) not null,
    role varchar(24) not null,
    created_utc timestamp without time zone not null default now(),
    updated_utc timestamp without time zone not null default now(),
    deleted boolean not null default false,
    constraint pk_users primary key(id),
    constraint u_users unique(user_name)
);