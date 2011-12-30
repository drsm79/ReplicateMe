ReplicateMe
===================

ReplicateMe is a simple app that runs in your **local** CouchDB instance. Sites
running CouchDB can add a ReplicateMe button to their pages. This takes you to
this application on your local instance where you can configure (continuous vs
one shot, one way vs bidirectional) and trigger replication.

It uses a cookie to store the database URL, this allows you to change the name
and location of your database (but assumes a standard location of the 
application).

I think @jchris had the idea...