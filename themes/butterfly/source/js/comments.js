fetch('/article.json')
    .then(res => res.json())
    .then(articleData => {
        const urls = Object.keys(articleData);

        fetch('https://tk.pl.blog.sinzmise.top/', {
            method: "POST",
            body: JSON.stringify({ "event": "GET_RECENT_COMMENTS", "accessToken": "f230dc1bac8bbb58af81860f1c6b5ca4", "includeReply": true, "pageSize": -1 }),
            headers: { 'Content-Type': 'application/json' }
        })
            .then(res => res.json())
            .then(({ data }) => {
                let totalComments = 0;
                data.forEach(item => {
                    totalComments++;
                });
                const commentElement = document.querySelector('.length-num.icat-pc-comment');
                if (commentElement) {
                    commentElement.innerText = totalComments;
                }
                const commentElements = document.querySelector('.length-num.icat-pe-comment');
                if (commentElements) {
                    commentElements.innerText = totalComments;
                }
                console.log('本站Twikoo总评论数:', totalComments);
            });
    });

// 总评论数量
