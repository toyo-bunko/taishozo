set -e -o pipefail

python 020_create_excel.py
python 030_create_rdf_data.py
python 040_create_index.py