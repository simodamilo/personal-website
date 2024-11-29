import { Col, Row } from "antd";
import Navigator from "./ui/components/navigator/Navigator";
import Homepage from "./ui/pages/homepage/Homepage";
import Experience from "./ui/pages/experience/Experience";

export default function Layout() {
  return (
    <main className="h-dvh w-full">
      <Row className="bg-bg-color dark:bg-dark-bg-color">
        <Navigator />
        <Col span={24} md={{ span: 23 }}>
          <div id="part-1" className="h-fit lg:h-screen">
            <Homepage />
          </div>
          <div id="part-2" className="h-fit lg:h-screen">
            <Experience />
          </div>
          <div id="part-3" className="h-fit lg:h-screen">
            Page 3
          </div>
        </Col>
      </Row>
    </main>
  );
}
