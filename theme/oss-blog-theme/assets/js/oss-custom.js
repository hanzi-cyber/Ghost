/* ============================================
   开源个人博客系统 - 自定义脚本
   功能：搜索高亮、阅读进度条、返回顶部
   ============================================ */

(function () {
    'use strict';

    /* ===== 1. 阅读进度条 ===== */
    function initReadingProgress() {
        // 只在文章详情页显示
        if (!document.body.classList.contains('post-template')) {
            return;
        }

        var progressBar = document.createElement('div');
        progressBar.className = 'oss-reading-progress';
        document.body.appendChild(progressBar);

        function updateProgress() {
            var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            var docHeight = document.documentElement.scrollHeight - window.innerHeight;
            var progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
            progressBar.style.width = progress + '%';
        }

        window.addEventListener('scroll', updateProgress, { passive: true });
        updateProgress();
    }

    /* ===== 2. 返回顶部按钮 ===== */
    function initBackToTop() {
        var button = document.createElement('button');
        button.className = 'oss-back-to-top';
        button.innerHTML = '↑';
        button.setAttribute('aria-label', '返回顶部');
        button.title = '返回顶部';
        document.body.appendChild(button);

        function toggleVisibility() {
            if (window.pageYOffset > 300) {
                button.classList.add('visible');
            } else {
                button.classList.remove('visible');
            }
        }

        button.addEventListener('click', function () {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });

        window.addEventListener('scroll', toggleVisibility, { passive: true });
        toggleVisibility();
    }

    /* ===== 3. 搜索关键词高亮 ===== */
    function highlightSearchKeywords() {
        // 从 URL 参数获取搜索关键词
        var urlParams = new URLSearchParams(window.location.search);
        var keyword = urlParams.get('q') || urlParams.get('keyword') || urlParams.get('query');

        if (!keyword || keyword.trim() === '') {
            return;
        }

        var contentArea = document.querySelector('.gh-content') || document.querySelector('.gh-main');
        if (!contentArea) {
            return;
        }

        var terms = keyword.trim().split(/\s+/).filter(function (t) {
            return t.length > 0;
        });

        if (terms.length === 0) {
            return;
        }

        // 递归遍历文本节点并高亮
        function highlightTextNodes(node) {
            if (node.nodeType === Node.TEXT_NODE) {
                var text = node.textContent;
                var hasMatch = terms.some(function (term) {
                    return text.toLowerCase().indexOf(term.toLowerCase()) !== -1;
                });

                if (hasMatch) {
                    var span = document.createElement('span');
                    span.className = 'oss-highlight-wrapper';
                    var highlighted = text;
                    terms.forEach(function (term) {
                        var regex = new RegExp('(' + escapeRegExp(term) + ')', 'gi');
                        highlighted = highlighted.replace(regex, '<mark class="oss-search-highlight">$1</mark>');
                    });
                    span.innerHTML = highlighted;
                    node.parentNode.replaceChild(span, node);
                }
            } else if (node.nodeType === Node.ELEMENT_NODE &&
                node.tagName !== 'SCRIPT' &&
                node.tagName !== 'STYLE' &&
                node.tagName !== 'MARK' &&
                !node.classList.contains('oss-highlight-wrapper')) {
                Array.from(node.childNodes).forEach(highlightTextNodes);
            }
        }

        function escapeRegExp(string) {
            return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        }

        highlightTextNodes(contentArea);
    }

    /* ===== 4. 搜索结果页无结果提示 ===== */
    function enhanceSearchResults() {
        var urlParams = new URLSearchParams(window.location.search);
        var keyword = urlParams.get('q') || urlParams.get('keyword');

        if (!keyword) return;

        // 检查是否有搜索结果
        var results = document.querySelectorAll('.gh-feed .post-card, .search-results .post-card');
        if (results.length === 0) {
            var feed = document.querySelector('.gh-feed') || document.querySelector('.search-results');
            if (feed) {
                var noResults = document.createElement('div');
                noResults.className = 'oss-no-results';
                noResults.innerHTML =
                    '<div class="oss-no-results-icon">🔍</div>' +
                    '<div class="oss-no-results-title">未找到相关文章</div>' +
                    '<div class="oss-no-results-suggestion">试试其他关键词，或浏览 <a href="/">首页</a> 查看全部文章</div>';
                feed.appendChild(noResults);
            }
        }
    }

    /* ===== 5. 文章卡片阅读时长显示 ===== */
    function enhancePostCards() {
        var cards = document.querySelectorAll('.post-card');
        cards.forEach(function (card) {
            // 可以在这里添加卡片增强功能
            // 例如：添加阅读时长标签、收藏按钮等
        });
    }

    /* ===== 初始化 ===== */
    function init() {
        initReadingProgress();
        initBackToTop();
        highlightSearchKeywords();
        enhanceSearchResults();
        enhancePostCards();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
