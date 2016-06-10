#!/bin/sh

while true; do
	inotifywait www
	rsync -rav --delete www/* jfellus@depinfo.u-cergy.fr:/var/www/depinfo-dev
done
