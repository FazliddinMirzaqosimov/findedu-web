import React, { FC } from "react";
import { Image, Space } from "antd";
import { EyeOutlined } from "@ant-design/icons";
import s from "./ImageViewerStyle.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Grid, Pagination, Autoplay } from "swiper";
import { IImages } from "./images_types/images_types";

interface ImageProps {
  data?: IImages[];
  src?: string;
  width?: number;
  height?: number;
}


////////////////////////////////////////////////////////////////////////

// 1ta rasm bolsa - src degan props, width height - required

// photogalary bolsa - data degan props, width height - keragi yoq, ozida yozilgan

////////////////////////////////////////////////////////////////////////


const ImageViewer: FC<ImageProps> = ({ data, width, height, src }) => {
  return (
    <div className={s.img}>
      <Image.PreviewGroup>
        {data ? (
          <Swiper
            slidesPerView={data.length <= 4 ? data.length : 3}
            grid={{
              rows: data.length <= 4 ? 1 : 2,
            }}
            autoplay={true}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Grid, Pagination, Autoplay]}
            className={s.mySwiper}
            style={{
              height:
                data.length == 1
                  ? 650
                  : data.length == 2
                  ? 400
                  : data.length == 3
                  ? 282
                  : data.length == 4
                  ? 200
                  : 565,
            }}
          >
            {data?.map((e) => (
              <SwiperSlide className={s.swiperSlide} key={e.id}>
                <div className={s.d}>
                  <Image
                    width={
                      data.length == 4
                        ? 300
                        : data.length == 2
                        ? 600
                        : data.length == 1
                        ? 1200
                        : 380
                    }
                    height={
                      data.length == 4
                        ? 200
                        : data.length == 2
                        ? 400
                        : data.length == 1
                        ? 650
                        : 282
                    }
                    src={e?.src}
                    preview={{
                      mask: (
                        <Space direction="horizontal" align="center">
                          <EyeOutlined />
                          Preview
                        </Space>
                      ),
                    }}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : src ? (
          <Image
            width={width}
            height={height}
            src={src}
            preview={{
              mask: (
                <Space direction="horizontal" align="center">
                  <EyeOutlined />
                  Preview
                </Space>
              ),
            }}
          />
        ) : null}
      </Image.PreviewGroup>
    </div>
  );
};

export default ImageViewer;
