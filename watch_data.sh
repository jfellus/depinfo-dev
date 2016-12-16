#!/bin/sh

while true; do
	inotifywait data
	make
done
