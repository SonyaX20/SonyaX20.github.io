async function loadPost() {
    const urlParams = new URLSearchParams(window.location.search);
    const postPath = urlParams.get('post');
    
    function showError(title, message, details = {}) {
        const detailsHtml = Object.entries(details)
            .map(([key, value]) => `<p><strong>${key}:</strong> ${value}</p>`)
            .join('');

        document.getElementById('post-content').innerHTML = `
            <div style="padding: 20px; font-family: monospace; white-space: pre-wrap;">
                <h2 style="color: red;">${title}</h2>
                <p>${message}</p>
                <div style="background: #f8f9fa; padding: 10px; margin: 10px 0; border-left: 4px solid red;">
                    ${detailsHtml}
                </div>
                <hr>
                <a href="index.html">Return to Home</a>
            </div>
        `;
    }

    if (!postPath) {
        showError('URL Parameter Error', 'No post path provided in URL');
        return;
    }

    try {
        // 尝试多个可能的 URL
        const possibleUrls = [
            // 1. 直接从当前域名获取
            postPath,
            // 2. 从 GitHub Pages URL 获取
            `https://sonyax20.github.io/${postPath}`,
            // 3. 从 GitHub raw content 获取
            `https://raw.githubusercontent.com/SonyaX20/SonyaX20.github.io/main/${postPath}`,
            // 4. 相对路径尝试
            `../${postPath}`,
            `./${postPath}`
        ];

        showError(
            'Status Update',
            'Attempting to fetch post file...',
            {
                'Original Path': postPath,
                'Trying URLs': JSON.stringify(possibleUrls, null, 2)
            }
        );

        let response;
        let successUrl;
        
        // 尝试所有可能的 URL
        for (const url of possibleUrls) {
            try {
                showError('Status Update', `Trying URL: ${url}`);
                response = await fetch(url);
                if (response.ok) {
                    successUrl = url;
                    break;
                }
            } catch (fetchError) {
                showError('Fetch Attempt Failed', `Failed to fetch from ${url}`, {
                    'Error': fetchError.message
                });
                continue;
            }
        }

        if (!response?.ok) {
            throw new Error('Failed to fetch content from all attempted URLs');
        }

        showError(
            'Status Update',
            'File loaded successfully',
            {
                'Successful URL': successUrl,
                'Response Status': response.status,
                'Content Type': response.headers.get('content-type')
            }
        );

        const markdown = await response.text();
        showError(
            'Status Update',
            'File loaded successfully',
            {
                'Content Length': markdown.length,
                'First 100 chars': markdown.substring(0, 100)
            }
        );

        // 2. 解析 frontmatter
        let content = markdown;
        let frontmatter = {};
        
        try {
            showError(
                'Status Update',
                'Parsing frontmatter...',
                {
                    'Has Frontmatter': markdown.startsWith('---'),
                    'Content Preview': markdown.substring(0, 200)
                }
            );

            if (markdown.startsWith('---')) {
                const endIndex = markdown.indexOf('---', 3);
                if (endIndex !== -1) {
                    const frontmatterText = markdown.slice(3, endIndex).trim();
                    frontmatterText.split('\n').forEach(line => {
                        const [key, ...valueParts] = line.split(':');
                        if (key && valueParts.length) {
                            frontmatter[key.trim()] = valueParts.join(':').trim();
                        }
                    });
                    content = markdown.slice(endIndex + 3).trim();

                    showError(
                        'Status Update',
                        'Frontmatter parsed successfully',
                        {
                            'Frontmatter': JSON.stringify(frontmatter, null, 2),
                            'Content Length': content.length
                        }
                    );
                }
            }
        } catch (frontmatterError) {
            showError(
                'Frontmatter Parsing Error',
                frontmatterError.message,
                {
                    'Error Stack': frontmatterError.stack,
                    'Raw Content': markdown.substring(0, 500)
                }
            );
            return;
        }

        // 3. 渲染内容
        try {
            showError(
                'Status Update',
                'Configuring marked and rendering content...',
                {
                    'Content Length': content.length,
                    'Has Frontmatter': Object.keys(frontmatter).length > 0
                }
            );

            marked.setOptions({
                highlight: function(code, lang) {
                    try {
                        if (lang && hljs.getLanguage(lang)) {
                            return hljs.highlight(code, { language: lang }).value;
                        }
                        return hljs.highlightAuto(code).value;
                    } catch (highlightError) {
                        showError(
                            'Highlight Warning',
                            'Code highlighting failed, using plain text',
                            {
                                'Language': lang,
                                'Error': highlightError.message
                            }
                        );
                        return code;
                    }
                },
                breaks: true,
                gfm: true
            });

            const renderedContent = marked.parse(content);
            
            showError(
                'Status Update',
                'Content rendered successfully',
                {
                    'Rendered Length': renderedContent.length,
                    'Title': frontmatter.title || 'No title'
                }
            );

            // 最终更新页面
            document.getElementById('post-content').innerHTML = `
                <header class="post-header">
                    <h1>${frontmatter.title || ''}</h1>
                    <div class="post-meta">
                        <span class="post-date">${frontmatter.date || ''}</span>
                        ${frontmatter.tags ? 
                            `<div class="post-tags">
                                ${frontmatter.tags
                                    .replace(/[\[\]]/g, '')
                                    .split(',')
                                    .map(tag => `<span class="tag">${tag.trim()}</span>`)
                                    .join(' ')}
                            </div>` : ''
                        }
                    </div>
                </header>
                <div class="markdown-body">
                    ${renderedContent}
                </div>
            `;

        } catch (renderError) {
            showError(
                'Rendering Error',
                renderError.message,
                {
                    'Error Stack': renderError.stack,
                    'Content Preview': content.substring(0, 500),
                    'Frontmatter': JSON.stringify(frontmatter, null, 2)
                }
            );
        }

    } catch (error) {
        showError(
            'Fatal Error',
            error.message,
            {
                'Error Type': error.name,
                'Error Stack': error.stack,
                'Original Path': postPath,
                'Full URL': window.location.href,
                'Browser Info': navigator.userAgent,
                'Current Location': window.location.toString(),
                'Base URL': document.baseURI
            }
        );
    }
}

document.addEventListener('DOMContentLoaded', loadPost); 