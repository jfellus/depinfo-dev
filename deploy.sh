#!/bin/sh

while true; do
	rsync -rav www/* jfellus@depinfo.u-cergy.fr:/var/www/depinfo-dev
	rsync -rav pages/*.sh jfellus@depinfo.u-cergy.fr:/var/www-data/pages
	rsync -rav pages/conf.d jfellus@depinfo.u-cergy.fr:/var/www-data/pages
	rsync -rav pages/mammoth-* jfellus@depinfo.u-cergy.fr:/var/www-data/pages
	inotifywait .
done
