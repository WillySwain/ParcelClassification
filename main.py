from icrawler.builtin import GoogleImageCrawler

google_crawler = GoogleImageCrawler(storage={'root_dir': 'goodpackages'})
google_crawler.crawl(keyword='packages ready to ship', max_num=500)

google_crawler = GoogleImageCrawler(storage={'root_dir': 'badpackages'})
google_crawler.crawl(keyword='destroyed packages', max_num=5)

from torchvision import transforms

transforms.Compose([
    transforms.Resize(256),
    transforms.CenterCrop(224),
    transforms.ToTensor(),
    transforms.Normalize(mean=[0.485, 0.456, 0.406], std=[0.229, 0.224, 0.225])
])
