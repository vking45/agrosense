import axios from "axios";

export const humidity = async () => {
    const res = await axios.get("https://api.thingspeak.com/channels/2349463/fields/1/last.json?api_key=44DZCMPWNDVC7KO1&results=1");
    console.log(res.data);
    return res.data['field1'];
}

export const temperature = async () => {
    const res = await axios.get("https://api.thingspeak.com/channels/2349463/fields/2/last.json?api_key=44DZCMPWNDVC7KO1&results=1");
    console.log(res.data);
    return res.data['field2'];
}

export const moisture = async () => {
    const res = await axios.get("https://api.thingspeak.com/channels/2349463/fields/3/last.json?api_key=44DZCMPWNDVC7KO1&results=1");
    console.log(res.data);
    return res.data['field3'];
}

export const co2 = async () => {
    const res = await axios.get("https://api.thingspeak.com/channels/2349463/fields/4/last.json?api_key=44DZCMPWNDVC7KO1&results=1");
    console.log(res.data);
    return res.data['field4'];
}

export const light = async () => {
    const res = await axios.get("https://api.thingspeak.com/channels/2349463/fields/5/last.json?api_key=44DZCMPWNDVC7KO1&results=1");
    console.log(res.data);
    return res.data['field5'];
}