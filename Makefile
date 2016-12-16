ARTICLES=$(shell find data -name "*.*")
GENERATED:=$(ARTICLES:data/%=generated/%.html)

all: $(GENERATED)

generated/%.html: data/%
	@mkdir -p `dirname $@`
	@pandoc $^ > $@
	@cp $@ `echo $@ | sed -e 's|generated/\(.*\)\.[a-zA-Z0-9]*\.html|www/pages/\1.html|g'`
