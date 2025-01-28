
create table blog_entry
(
    id integer primary key autoincrement,
    created_at integer,
    modified_at integer
);

create table blog_entry_i18n (
    id integer primary key autoincrement,
    blog_entry_id int,
    language text,
    entry_title text,
    entry_body text,
    constraint fk_entry_i18n
        foreign key (blog_entry_id)
        references blog_entry(id)
);

create table tag (
    id integer primary key autoincrement,
    value text unique
);

create table blog_entry_tag (
    blog_entry_id int,
    tag_id int,
    constraint fk_blog_m2m
        foreign key (blog_entry_id)
        references blog_entry(id),
    constraint fk_tag_m2m
        foreign key (tag_id)
        references tag(id)
);
