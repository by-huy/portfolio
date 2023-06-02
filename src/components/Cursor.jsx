export default function Cursor() {
    let cursor = document.querySelector('.cursor')

    document.addEventListener('mousemove', moveCursor);

    function moveCursor(e) {
        let x = e.clientX;
        let y = e.clientY

        console.log(x, y)
        cursor.style.left = `${x}px`
        cursor.style.top = `${y}px`
    }

    return (
        <div className="top-1/2 left-1/2 rounded-full cursor fixed w-3 h-3 bg-secondary-600 z-50 mix-blend-difference -translate-x-1/2 -translate-y-1/2">

        </div>
    )
}