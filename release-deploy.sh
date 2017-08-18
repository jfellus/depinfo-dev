#!/bin/sh

while true; do
	rsync -rav --exclude 'cgi-bin/*' --exclude '*.php' www/* jfellus@depinfo.u-cergy.fr:/var/www/depinfo-release
	rsync -rav www/index-release.php jfellus@depinfo.u-cergy.fr:/var/www/depinfo-release/index.php
	rsync -rav pages/*.sh jfellus@depinfo.u-cergy.fr:/var/www-data/pages
	rsync -rav pages/conf.d jfellus@depinfo.u-cergy.fr:/var/www-data/pages
	rsync -rav pages/mammoth-* jfellus@depinfo.u-cergy.fr:/var/www-data/pages
	inotifywait .
done
