#!/bin/bash
 
if [ "$#" -eq 0 ]; then
	echo "No hay argumentos"
else
	args=""
	count=0
	for arg in "$@"; do
		echo "$arg"
		((count++))
		if [ $count -eq 3 ]; then
			break
		fi
	done
fi
