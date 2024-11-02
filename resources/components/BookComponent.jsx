export default function BookComponent() {
    const image = book.image_url
    return (
        <div className="w-[150px] md:w-[190px]">
            <div style="bg-" className="float-left bg-bookBg">
                <div>
                    <img src={image} className="flex contain mt-1 mr-2" />
                </div>
            </div >
        </div>
    )
}