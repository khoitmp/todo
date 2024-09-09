create table if not exists user_tasks
(
	id int generated always as identity,
	user_name varchar(250) not null,
	description varchar(250) not null,
	completed boolean not null default false,
	created_utc timestamp without time zone not null default now(),
    updated_utc timestamp without time zone not null default now(),
	deleted boolean not null default false,
    constraint pk_user_tasks primary key(id)
);