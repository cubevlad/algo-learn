const fs = require('fs');

const file_content = fs.readFileSync('input.txt', { encoding: 'utf-8'});

const dates = file_content.split(/[\n\r]+/);

const convertToSeconds = (str) => {
    const [hours, minutes, seconds] = str.split(':')
    const h = Number(hours) * 3600
    const m = Number(minutes) * 60
    const s = Number(seconds)
    return h + m + s
}

const deleteSeconds = (sec) => {
    if (sec > 86400) {
        return deleteSeconds(sec - 86400)
    }

    return sec
}

const getDate = (seconds) => {
    let time = seconds
    if (seconds > 86400) {
        time = deleteSeconds(time)
    }

    let h = Math.floor(time / 3600  % 24)
    let m = Math.floor(time / 60 % 60)
    let s = Math.floor(time % 60)

    const abs_h = h < 10 ? '0' + h : h
    const abs_m = m < 10 ? '0' + m : m
    const abs_s = s < 10 ? '0' + s : s

    return `${abs_h}:${abs_m}:${abs_s}`
}

const getSntp = (dates) => {
    const [a, b, c] = dates.map(_data => convertToSeconds(_data))

    let delta = (c - a)
    if (c < a) {
        delta = ((c - a) + 86400)
    }

    let d = delta / 2
    const str_d = d.toString().split('.')
    if (str_d.length === 2) {
        d = Number(str_d[0]) + 1
    }

    const resDate = getDate(b + d)

    return resDate
};

const result2 = getSntp(dates);
fs.writeFileSync('output.txt', result2.toString());
