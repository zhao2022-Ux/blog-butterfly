#!/bin/bash

while [[ "$#" -gt 0 ]]; do
    case $1 in
        -h|--help)
            echo "Usage: bash.sh [en|zh|all|show <en|zh>|-h]"
            echo "Options:"
            echo "  [set|s] en   Set English configuration"
            echo "  [set|s] zh   Set Chinese configuration"
            echo "  -h, --help      Display this help message"
            exit 0
            ;;
        s | set)
            lang=$2
            if [ "$lang" = "en" ] || [ "$lang" = "zh" ]; then
                cp "config-$lang.yml" _config.yml
                cp "config-butterfly-$lang.yml" "_config.butterfly.yml"
                echo "Set $2 success!"
            else
                echo "Error! Please input 'en' or 'zh' or 'all'!"
            fi
            shift
            ;;
        *)
            echo "Error! Please input set <en|zh> or '-h' for help!"
            exit 1
            ;;
    esac
    shift
done