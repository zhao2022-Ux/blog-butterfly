const YML = require('yamljs')
const fs = require('fs')

const blacklist = ["Hexo", "Volantis"]; // 由于某种原因，不想订阅的列表

let friends = [],
    data_f = YML.parse(fs.readFileSync('source-en/_data/friends.yml').toString().replace(/(?<=rss:)\s*\n/g, ' ""\n'));

data_f.forEach((entry, index) => {
    let lastIndex = 4;
    if (index < lastIndex) {
        const filteredLinkList = entry.items.filter(linkItem => !blacklist.includes(linkItem.title));
        friends = friends.concat(filteredLinkList);
    }
});

// 根据规定的格式构建 JSON 数据
const friendData = {
    friends: friends.map(item => {
        return [item.title, item.url, item.avatar];
    })
};

// 将 JSON 对象转换为字符串
const friendJSON = JSON.stringify(friendData, null, 2);

// 写入 friend.json 文件
fs.writeFileSync('./source-en/friend.json', friendJSON);

console.log('friend.json 文件已生成。');
