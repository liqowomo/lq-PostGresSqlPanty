#!/usr/bin/env fish 
clear
echo ""
echo " Connceting using pgcli"
echo " Docs - https://www.pgcli.com/docs"
echo ""
echo "Connnecting to the postgres db using pgcli"
echo "- This is alternative method of connecting to the db insread of psql , pgcli has more colors and stuff"
echo ""
echo "Main Command from website"
echo ""
echo "pgcli -h db.urlqwzlpqnxiduxiwdse.supabase.co -p 5432 -d postgres -U postgres"
echo ""
echo (set_color red)"Password: YermaGEx4wthRB3W" 
echo ""
pgcli -h db.urlqwzlpqnxiduxiwdse.supabase.co -p 5432 -d postgres -U postgres