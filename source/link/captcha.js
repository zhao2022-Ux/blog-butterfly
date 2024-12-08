initGeetest4({
    captchaId: "54088bb07d2df3c46b79f80300b0abbe",
    product: 'popup',
    language: "zho",
    riskType: 'word'
}, function(captcha) {
    // captcha为验证码实例
    captcha.appendTo("#captcha"); // 调用appendTo将验证码插入到页的某一个元素中，这个元素用户可以自定义
    $("#submit-btn").click(function() {
        var result = captcha.getValidate();
        if (!result) {
            return alert('请完成人机验证！');
        }
        result.captcha_id = "54088bb07d2df3c46b79f80300b0abbe"
        //your code
        let check = $("#friend-check").is(":checked");
        let name = $("#friend-name").val();
        let url = $("#friend-link").val();
        let image = $("#friend-icon").val();
        let des = $("#friend-des").val();
        if (!check) {
            alert("请勾选 \"我不会提交无意义的信息，并且已经遵守以上规则。\"");
            return;
        }
        if (!(name && url && image && des)) {
            alert("站点信息不完整！");
            return;
            captcha.reset();
        }
        if (!(TestUrl(url))) {
            alert("URL格式错误！需要包含HTTP或者HTTPS协议头！ ");
            return;
            captcha.reset();
        }
        if (!(TestUrl(image))) {
            alert("图片URL的格式错误！它需要包含HTTP或者HTTPS协议头！");
            return;
            captcha.reset();
        }
        event.target.classList.add('is-loading');
        $.ajax({
            type: 'POST',
            dataType: "json",
            data: {
                "name": name,
                "url": url,
                "image": image,
                "description": des,
                "verify": token,
            },
            url: 'https://你的qexo地址/pub/ask_friend/',
            success: function(data) {
                alert(data.msg);
                captcha.reset();
            }
        });
    })
});