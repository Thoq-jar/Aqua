#!/bin/bash

clear

TOML_FILE="Aqua.toml"

if ! command -v python3 &> /dev/null; then
    echo "Python3 is not installed. Please install it and try again."
    exit 1
fi

CONFIG=$(python3 - <<END
import sys
import subprocess

try:
    import tomllib
except ImportError:
    subprocess.check_call([sys.executable, '-m', 'pip', 'install', 'tomllib'])
    import tomllib

TOML_FILE = '${TOML_FILE}'

try:
    with open(TOML_FILE, 'rb') as f:
        config = tomllib.load(f)

    language = config['Aqua_Config']['Language']
    interpreter_name = config['Interpreter_Config']['Name']
    main_file = config['Interpreter_Config']['Main']
    path = config['Interpreter_Config']['Path']

    print(language, interpreter_name, main_file, path)
except KeyError as e:
    print(f'Aqua -> Syntax Error: Key {str(e)} not found in the TOML file.')
    sys.exit(1)
END
)

read -r language interpreter_name main_file path <<< "$CONFIG"

language=$(echo "$language" | tr '[:upper:]' '[:lower:]')

file_extension=".js"
if [ "$language" == "typescript" ]; then
    file_extension=".ts"
fi

if [[ ! "$path" == */ ]]; then
    path+='/'
fi

if [ "$interpreter_name" == "bun" ]; then
    command="bun ${path}${main_file}${file_extension}"
elif [ "$interpreter_name" == "node" ]; then
    command="node ${path}${main_file}${file_extension}"
else
    echo "Aqua -> Error: Unsupported interpreter: ${interpreter_name}"
    exit 1
fi

$command "$@"
exit_code=$?

if [ $exit_code -ne 0 ]; then
    echo "Aqua -> Execution Error: Command exited with status $exit_code"
    exit $exit_code
fi
