
export async function scrapeSite3(browser, book_name) {
    const page = await browser.newPage();
    const url = `https://mplib.mapo.go.kr/mcl/PGM3007/plusSearchResultList.do?searchKey=ALL&searchKeyword=${book_name}`;

    await page.goto(url);

    const isResultsExist = await page.evaluate(() => {
        const lis = document.querySelectorAll('.resultList.imageType li');
        return lis.length > 0;
    });

    if (!isResultsExist) {
        console.log('site 3 : 검색 결과가 없습니다.');
        await page.close();
        return [];
    }

    await page.waitForSelector('.resultList.imageType li');

    const results = await page.evaluate(() => {
        const lis = document.querySelectorAll('.resultList.imageType li');
        const formattedResults = [];
        lis.forEach(li => {
          const imgElement = (li.querySelector('.img img')?.getAttribute('src') || '').trim();
          const titleElement = (li.querySelector('.tit a')?.textContent || '').trim();
          const authorElement = (li.querySelector('.author span:nth-child(1)')?.textContent || '').trim();
          const data1Element = (li.querySelector('.data span:nth-child(1)')?.textContent || '').trim();
          const siteElement = (li.querySelector('.site span')?.textContent || '').trim();
          const txtElement = (li.querySelector('.txt ')?.textContent || '').trim();
          if (!titleElement) {
            console.log('Site 3: 제목이 없는 자료가 있습니다.');
            return;
          }
          formattedResults.push({ imgElement, titleElement, authorElement, data1Element, siteElement, txtElement });
        });
        return formattedResults;
    });
    
    const firstThreeResults = results.slice(0, 3);
    console.log('site 3 :', firstThreeResults);

    await page.close();
    return firstThreeResults;
}