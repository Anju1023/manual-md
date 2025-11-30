# フォルダ・ファイル作成
import os


def create_file(file_name, write_text):
    with open(file_name, "w", encoding="utf-8") as f:
        f.write(write_text)


folders = [
    "01_recipe",
    "02_application",
    "03_labeler",
    "04_cb_data",
    "05_t_data",
    "06_print",
    "07_layout",
]

if __name__ == "__main__":
    for folder in folders:
        folder_path = f"app/04_ad_hoc/new_product/{folder}"
        os.mkdir(folder_path)

        file_name = f"app/04_ad_hoc/new_product/{folder}/page.mdx"
        write_text = f"{{/* {folder} */}}"
        create_file(file_name, write_text)
