function analyzeLog() {
    const input = document.getElementById('logInput').value.trim();
    if (!input) {
        alert('Please paste log content to analyze.');
        return;
    }

    const words = input
        .split(/[\s:;,.()\[\]{}"'`~!@#$%^&*+=<>?/\\|]+/)
        .filter(w => w.length > 0);

    const totalWords = words.length;

    const freq = {};
    words.forEach(word => {
        freq[word] = (freq[word] || 0) + 1;
    });

    const sorted = Object.entries(freq).sort((a, b) => b[1] - a[1]);
    const maxCount = sorted.length > 0 ? sorted[0][1] : 1;

    const resultBody = document.getElementById('resultBody');
    resultBody.innerHTML = '';

    sorted.forEach(([word, count], i) => {
        const pct = ((count / maxCount) * 100).toFixed(0);
        const freqPct = ((count / totalWords) * 100).toFixed(1);
        const row = document.createElement('tr');
        row.innerHTML =
            '<td>' + (i + 1) + '</td>' +
            '<td>' + escapeHtml(word) + '</td>' +
            '<td>' + count + (count === 1 ? ' time' : ' times') + '</td>' +
            '<td><div class="bar-cell">' +
                '<div class="bar" style="width:' + pct + '%;min-width:4px;max-width:200px;"></div>' +
                '<span class="bar-label">' + freqPct + '%</span>' +
            '</div></td>';
        resultBody.appendChild(row);
    });

    document.getElementById('totalWords').textContent = totalWords + ' total words';
    document.getElementById('uniqueWords').textContent = sorted.length + ' unique patterns';

    const resultSection = document.getElementById('resultSection');
    resultSection.classList.remove('hidden');
    resultSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function clearAll() {
    document.getElementById('logInput').value = '';
    document.getElementById('resultSection').classList.add('hidden');
    document.getElementById('resultBody').innerHTML = '';
}

function loadSample() {
    document.getElementById('logInput').value =
        'INFO   read_physical_table: message 1   This is test mail\n' +
        'INFO   read_physical_data: message 2    Lets plan outdoor trip\n' +
        'INFO   read_physical_memory: message 3 : Goa is the best\n' +
        'WARN   connection_timeout: message 4   Database connection slow\n' +
        'ERROR  null_pointer_exception: message 5   User session expired\n' +
        'INFO   read_physical_table: message 6   Processing batch request\n' +
        'INFO   read_physical_data: message 7    Cache miss detected\n' +
        'ERROR  out_of_memory: message 8   Heap space exhausted\n' +
        'WARN   high_cpu_usage: message 9   Thread pool saturated\n' +
        'INFO   read_physical_memory: message 10  Garbage collection triggered';
}

function escapeHtml(str) {
    var div = document.createElement('div');
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
}
