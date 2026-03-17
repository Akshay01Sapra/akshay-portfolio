import "../assets/styles/PortfolioSlider.scss"

// ProjectCardStackVertical.jsx
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCreative } from "swiper/modules";

// core styles
import "swiper/css";
import "swiper/css/effect-creative";

export default function PortfolioSlider() {
    return (
        <div className="vp-viewport">
            <Swiper
                direction="vertical"
                slidesPerView={1}            // one full card visible
                grabCursor
                effect="creative"
                modules={[EffectCreative]}

                // 👇 critical to show peeking slides
                className="vp-swiper"
                style={{ paddingTop: 80, paddingBottom: 80 }}  // room for peeks

                // 👇 push prev/next into the padded area so they peek
                creativeEffect={{
                    prev: {
                        translate: [0, -90, -300],
                        // rotate: [0, 0, 0],  // rotateZ -360° → spins to 0°
                        scale: 0.94,
                        opacity: 0.85
                    },
                    next: {
                        translate: [0, 90, -300],
                        rotate: [160, 0, 0],  // rotateZ 360° → spins to 0°
                        scale: 0.94,
                        opacity: 0.85
                    }
                    
                }}
            >
                {Array.from({ length: 10 }).map((_, i) => (
                    <SwiperSlide key={i}>
                        <div className="vp-card">Card {i + 1}</div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
