import requests
from concurrent.futures import ThreadPoolExecutor

# list of image URLs you want to download
urls = [
    "https://media.giphy.com/media/4BJCvMoLPePq8/giphy.gif",
    "http://example.com/image2.jpg",
    # ... add more URLs as needed
]

def download_image(url):
    response = requests.get(url, stream=True)
    filename = url.split("/")[-1]  # this will take the last part of the URL as the filename

    if response.status_code == 200:
        with open(filename, 'wb') as f:
            for chunk in response.iter_content(1024):
                f.write(chunk)

# number of workers is equivalent to the max number of concurrent downloads
with ThreadPoolExecutor(max_workers=5) as executor:
    executor.map(download_image, urls)
