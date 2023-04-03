import react from "React"

export let Timer = () => {
    let seconds;
        if (!seconds) {
            seconds = setInterval(() => seconds++, 1000);
            return seconds;
        };
}
