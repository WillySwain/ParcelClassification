from icrawler.builtin import GoogleImageCrawler

google_crawler = GoogleImageCrawler(storage={'root_dir':'goodpackages'})
google_crawler.crawl(keyword='packages ready to ship',max_num=5)

google_crawler = GoogleImageCrawler(storage={'root_dir':'badpackages'})
google_crawler.crawl(keyword='destroyed packages',max_num=5)