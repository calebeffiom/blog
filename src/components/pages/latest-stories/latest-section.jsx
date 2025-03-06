import { Container } from "../../shared"
import profile from "../../../assets/images/profile.png"
import better from "../../../assets/images/better.jpg"
import flowerEyes from "../../../assets/images/flower-eyes.jpeg"
import ice from "../../../assets/images/ice.jpeg"
import drums from "../../../assets/images/talkingDrums.jpeg"
import "../../../styles/latest-section.css"
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder'
const LatestStoriesSection = () => {
    return (
        <section>
            <Container>
                <div className="section-inner py-[100px]">
                    <div className="section-heading-cont mb-[50px]">
                        <h2 className="text-[50px] font-[600]">Latest Stories</h2>
                        <p className="text-[18px] font-[300]">Stay upto date with the lastest write ups, inspirng articles and many more.</p>
                    </div>
                    <div className="stories-cont grid gap-[30px]">
                        <div className="story-flex-cont h-[450px] relative">
                            <img src={ice} className="rounded-[10px] mb-[15px] w-[100%] h-[200px]" alt="" />
                            <h2 className="text-[25px] mb-[15px]">Terrifying Legend: Abandoned Portlock Alaska</h2>
                            <p className="text-[17px]">This piece is for my New Year's resolution to share one original song, however imperfect/unfinished it may be, per month! I'll put the link to the article</p>




                            <div className="article-writer-details w-[100%] flex items-center justify-between">
                                <div className="author-cont flex gap-[10px] items-center">


                                    <div className="writer-image-cont">
                                        <img src={profile} className="h-[50px]" alt="" />
                                    </div>


                                    <div className="writer-name-cont">
                                        <h4>sara burdick</h4>
                                        <p className="text-[#8f8f8f] text-[13px]">a day ago in Horror</p>
                                    </div>

                                </div>


                                <div><BookmarkBorderIcon /></div>
                            </div>



                        </div>



                      













                        <div className="story-flex-cont h-[450px] relative">
                            <img src={better} className="rounded-[10px] mb-[15px] w-[100%] h-[200px]" alt="" />
                            <h2 className="text-[25px] mb-[15px]">I Deserve Better</h2>
                            <p className="text-[17px]">This piece is for my New Year's resolution to share one original song, however imperfect/unfinished it may be, per month! I'll put the link to the article</p>
                            <div className="article-writer-details w-[100%] flex items-center justify-between">
                                <div className="author-cont flex gap-[10px] items-center">


                                    <div className="writer-image-cont">
                                        <img src={profile} className="h-[50px]" alt="" />
                                    </div>


                                    <div className="writer-name-cont">
                                        <h4>sara burdick</h4>
                                        <p className="text-[#8f8f8f] text-[13px]">a day ago in Horror</p>
                                    </div>

                                </div>


                                <div><BookmarkBorderIcon /></div>
                            </div>

                        </div>
                        <div className="story-flex-cont h-[450px] relative">
                            <img src={drums} className="rounded-[10px] mb-[15px] w-[100%] h-[200px]" alt="" />
                            <h2 className="text-[25px] mb-[15px]">Talking Drums to 21st-Century Parties: The</h2>
                            <p className="text-[17px]">This piece is for my New Year's resolution to share one original song, however imperfect/unfinished it may be, per month! I'll put the link to the article</p>
                            <div className="article-writer-details w-[100%] flex items-center justify-between">
                                <div className="author-cont flex gap-[10px] items-center">


                                    <div className="writer-image-cont">
                                        <img src={profile} className="h-[50px]" alt="" />
                                    </div>


                                    <div className="writer-name-cont">
                                        <h4>sara burdick</h4>
                                        <p className="text-[#8f8f8f] text-[13px]">a day ago in Horror</p>
                                    </div>

                                </div>


                                <div><BookmarkBorderIcon /></div>
                            </div>

                        </div>
                        <div className="story-flex-cont h-[450px] relative">
                            <img src={flowerEyes} className="rounded-[10px] mb-[15px] w-[100%] h-[200px]" alt="" />
                            <h2 className="text-[25px] mb-[15px]">Awake In The Dark</h2>
                            <p className="text-[17px]">This piece is for my New Year's resolution to share one original song, however imperfect/unfinished it may be, per month! I'll put the link to the article</p>
                            <div className="article-writer-details w-[100%] flex items-center justify-between">
                                <div className="author-cont flex gap-[10px] items-center">


                                    <div className="writer-image-cont">
                                        <img src={profile} className="h-[50px]" alt="" />
                                    </div>


                                    <div className="writer-name-cont">
                                        <h4>sara burdick</h4>
                                        <p className="text-[#8f8f8f] text-[13px]">a day ago in Horror</p>
                                    </div>

                                </div>


                                <div><BookmarkBorderIcon /></div>
                            </div>

                        </div>
                        <div className="story-flex-cont h-[450px] relative">
                            <img src={flowerEyes} className="rounded-[10px] mb-[15px] w-[100%] h-[200px]" alt="" />
                            <h2 className="text-[25px] mb-[15px]">Awake In The Dark</h2>
                            <p className="text-[17px]">This piece is for my New Year's resolution to share one original song, however imperfect/unfinished it may be, per month! I'll put the link to the article</p>
                            <div className="article-writer-details w-[100%] flex items-center justify-between">
                                <div className="author-cont flex gap-[10px] items-center">


                                    <div className="writer-image-cont">
                                        <img src={profile} className="h-[50px]" alt="" />
                                    </div>


                                    <div className="writer-name-cont">
                                        <h4>sara burdick</h4>
                                        <p className="text-[#8f8f8f] text-[13px]">a day ago in Horror</p>
                                    </div>

                                </div>


                                <div><BookmarkBorderIcon /></div>
                            </div>

                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}
export default LatestStoriesSection