from csv import DictReader
from datetime import datetime

csv_path = "./static/uploads/table.csv"
md_en_path = "./content/eviction-tracking/_index.md"
md_es_path = "./content/eviction-tracking/_index.es.md"

def update_date(md_path, new_date):
	md_file = open(md_path, "r")
	lines = md_file.readlines()
	for i, line in enumerate(lines):
		if(line.startswith("date: ")):
			lines[i] = f"date: {new_date}\n"
	md_file = open(md_path, "w")
	md_file.writelines(lines)
	md_file.close()

with open(csv_path, "r") as csv_read_obj:
	csv_dict_reader = DictReader(csv_read_obj)
	first_row = next(csv_dict_reader)
	date_val = first_row["data_date"]
	new_date = datetime.strptime(date_val, '%m/%d/%Y').isoformat()
	update_date(md_en_path, new_date)
	update_date(md_es_path, new_date)