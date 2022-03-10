from os.path import abspath, join, dirname


def get_relative_path_of_sitemap(site_name):
    return abspath(join(dirname(__file__), '..', '..', 'resources', f'{site_name}', f'{site_name}.json'))
