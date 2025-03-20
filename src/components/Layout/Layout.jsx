import Navbar from '@/components/Navbar/Navbar';
import VideoFooter from '@/components/VideoFooter/VideoFooter';

export default function Layout({ children, footerVideoRef, videoSrc }) {
    return (
        <>
            <Navbar />
            <main>{children}</main>
            <VideoFooter videoRef={footerVideoRef} videoSrc={videoSrc} />
        </>
    );
}