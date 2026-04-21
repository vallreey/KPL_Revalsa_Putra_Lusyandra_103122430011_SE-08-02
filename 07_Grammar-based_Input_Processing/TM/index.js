/**
 * JSDoc ini opsional mau dibuat cek ketat atau tidak.
 * Boleh dihapus, boleh dibuat ketat.
 * @param {string} text Teks yang diambil dari berkas
 * @returns {import('./structure').RobotsTxt} 
 */
function parseRobots(text) {
    const lines = text.split('\n');

    const result = {
        agents: {},
        Sitemap: []
    };

    let currentAgents = [];

    for (let rawLine of lines) {
        let line = rawLine.trim();

        if (line === '' || line.startsWith('#')) {
            currentAgents = [];
            continue;
        }

        const [key, ...rest] = line.split(':');
        if (!key || rest.length === 0) continue;

        const value = rest.join(':').trim();
        const lowerKey = key.toLowerCase();

        if (lowerKey === 'user-agent') {
            const agent = value.toLowerCase();

            if (!result.agents[agent]) {
                result.agents[agent] = {
                    Allow: [],
                    Disallow: []
                };
            }

            currentAgents.push(agent);
        }

        else if (lowerKey === 'allow') {
            if (value === '') continue;

            for (const agent of currentAgents) {
                result.agents[agent].Allow.push(value);
            }
        }

        else if (lowerKey === 'disallow') {
            if (value === '') continue;

            for (const agent of currentAgents) {
                result.agents[agent].Disallow.push(value);
            }
        }

        else if (lowerKey === 'sitemap') {
            if (value !== '') {
                result.Sitemap.push(value);
            }
        }

        else if (lowerKey === 'host') {
            if (value !== '') {
                result.Host = value;
            }
        }
    }

    return result;
}

module.exports = parseRobots;