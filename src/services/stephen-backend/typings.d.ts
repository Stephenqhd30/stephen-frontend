declare namespace API {
  type BaseResponseBoolean = {
    code?: number;
    data?: boolean;
    message?: string;
  };

  type BaseResponseCaptcha = {
    code?: number;
    data?: Captcha;
    message?: string;
  };

  type BaseResponseInteger = {
    code?: number;
    data?: number;
    message?: string;
  };

  type BaseResponseLoginUserVO = {
    code?: number;
    data?: LoginUserVO;
    message?: string;
  };

  type BaseResponseLong = {
    code?: number;
    data?: number;
    message?: string;
  };

  type BaseResponsePagePost = {
    code?: number;
    data?: PagePost;
    message?: string;
  };

  type BaseResponsePagePostVO = {
    code?: number;
    data?: PagePostVO;
    message?: string;
  };

  type BaseResponsePageTag = {
    code?: number;
    data?: PageTag;
    message?: string;
  };

  type BaseResponsePageTagVO = {
    code?: number;
    data?: PageTagVO;
    message?: string;
  };

  type BaseResponsePageUser = {
    code?: number;
    data?: PageUser;
    message?: string;
  };

  type BaseResponsePageUserVO = {
    code?: number;
    data?: PageUserVO;
    message?: string;
  };

  type BaseResponsePostVO = {
    code?: number;
    data?: PostVO;
    message?: string;
  };

  type BaseResponseSearchVOObject = {
    code?: number;
    data?: SearchVOObject;
    message?: string;
  };

  type BaseResponseString = {
    code?: number;
    data?: string;
    message?: string;
  };

  type BaseResponseTagVO = {
    code?: number;
    data?: TagVO;
    message?: string;
  };

  type BaseResponseUser = {
    code?: number;
    data?: User;
    message?: string;
  };

  type BaseResponseUserVO = {
    code?: number;
    data?: UserVO;
    message?: string;
  };

  type Captcha = {
    code?: string;
    uuid?: string;
    image?: string;
    imageBuffer?: {
      accelerationPriority?: number;
      colorModel?: {
        transparency?: number;
        numComponents?: number;
        numColorComponents?: number;
        colorSpace?: { type?: number; numComponents?: number; cs_sRGB?: boolean };
        transferType?: number;
        alphaPremultiplied?: boolean;
        componentSize?: number[];
        pixelSize?: number;
      };
      raster?: {
        sampleModel?: {
          width?: number;
          height?: number;
          numBands?: number;
          dataType?: number;
          transferType?: number;
          sampleSize?: number[];
          numDataElements?: number;
        };
        dataBuffer?: {
          dataType?: number;
          offset?: number;
          size?: number;
          offsets?: number[];
          numBanks?: number;
        };
        minX?: number;
        minY?: number;
        width?: number;
        height?: number;
        sampleModelTranslateX?: number;
        sampleModelTranslateY?: number;
        numBands?: number;
        numDataElements?: number;
        parent?: {
          sampleModel?: {
            width?: number;
            height?: number;
            numBands?: number;
            dataType?: number;
            transferType?: number;
            sampleSize?: number[];
            numDataElements?: number;
          };
          dataBuffer?: {
            dataType?: number;
            offset?: number;
            size?: number;
            offsets?: number[];
            numBanks?: number;
          };
          minX?: number;
          minY?: number;
          width?: number;
          height?: number;
          sampleModelTranslateX?: number;
          sampleModelTranslateY?: number;
          numBands?: number;
          numDataElements?: number;
          transferType?: number;
          bounds?: {
            x?: number;
            y?: number;
            width?: number;
            height?: number;
            bounds2D?: {
              minX?: number;
              minY?: number;
              maxX?: number;
              maxY?: number;
              centerX?: number;
              centerY?: number;
              x?: number;
              y?: number;
              empty?: boolean;
              width?: number;
              height?: number;
            };
            empty?: boolean;
            location?: { x?: number; y?: number };
            size?: { width?: number; height?: number };
            rect?: {
              minX?: number;
              minY?: number;
              maxX?: number;
              maxY?: number;
              centerX?: number;
              centerY?: number;
              x?: number;
              y?: number;
              empty?: boolean;
              width?: number;
              height?: number;
            };
            minX?: number;
            minY?: number;
            maxX?: number;
            maxY?: number;
            centerX?: number;
            centerY?: number;
          };
        };
        rect?: {
          sampleModel?: {
            width?: number;
            height?: number;
            numBands?: number;
            dataType?: number;
            transferType?: number;
            sampleSize?: number[];
            numDataElements?: number;
          };
          dataBuffer?: {
            dataType?: number;
            offset?: number;
            size?: number;
            offsets?: number[];
            numBanks?: number;
          };
          minX?: number;
          minY?: number;
          width?: number;
          height?: number;
          sampleModelTranslateX?: number;
          sampleModelTranslateY?: number;
          numBands?: number;
          numDataElements?: number;
          transferType?: number;
          bounds?: {
            x?: number;
            y?: number;
            width?: number;
            height?: number;
            bounds2D?: {
              minX?: number;
              minY?: number;
              maxX?: number;
              maxY?: number;
              centerX?: number;
              centerY?: number;
              x?: number;
              y?: number;
              empty?: boolean;
              width?: number;
              height?: number;
            };
            empty?: boolean;
            location?: { x?: number; y?: number };
            size?: { width?: number; height?: number };
            rect?: {
              minX?: number;
              minY?: number;
              maxX?: number;
              maxY?: number;
              centerX?: number;
              centerY?: number;
              x?: number;
              y?: number;
              empty?: boolean;
              width?: number;
              height?: number;
            };
            minX?: number;
            minY?: number;
            maxX?: number;
            maxY?: number;
            centerX?: number;
            centerY?: number;
          };
        };
        transferType?: number;
        bounds?: {
          x?: number;
          y?: number;
          width?: number;
          height?: number;
          bounds2D?: {
            minX?: number;
            minY?: number;
            maxX?: number;
            maxY?: number;
            centerX?: number;
            centerY?: number;
            x?: number;
            y?: number;
            empty?: boolean;
            width?: number;
            height?: number;
          };
          empty?: boolean;
          location?: { x?: number; y?: number };
          size?: { width?: number; height?: number };
          rect?: {
            minX?: number;
            minY?: number;
            maxX?: number;
            maxY?: number;
            centerX?: number;
            centerY?: number;
            x?: number;
            y?: number;
            empty?: boolean;
            width?: number;
            height?: number;
          };
          minX?: number;
          minY?: number;
          maxX?: number;
          maxY?: number;
          centerX?: number;
          centerY?: number;
        };
      };
      transparency?: number;
      sampleModel?: {
        width?: number;
        height?: number;
        numBands?: number;
        dataType?: number;
        transferType?: number;
        sampleSize?: number[];
        numDataElements?: number;
      };
      minX?: number;
      minY?: number;
      numXTiles?: number;
      numYTiles?: number;
      minTileX?: number;
      minTileY?: number;
      tileWidth?: number;
      tileHeight?: number;
      tileGridXOffset?: number;
      tileGridYOffset?: number;
      alphaPremultiplied?: boolean;
      alphaRaster?: {
        sampleModel?: {
          width?: number;
          height?: number;
          numBands?: number;
          dataType?: number;
          transferType?: number;
          sampleSize?: number[];
          numDataElements?: number;
        };
        dataBuffer?: {
          dataType?: number;
          offset?: number;
          size?: number;
          offsets?: number[];
          numBanks?: number;
        };
        minX?: number;
        minY?: number;
        width?: number;
        height?: number;
        sampleModelTranslateX?: number;
        sampleModelTranslateY?: number;
        numBands?: number;
        numDataElements?: number;
        parent?: {
          sampleModel?: {
            width?: number;
            height?: number;
            numBands?: number;
            dataType?: number;
            transferType?: number;
            sampleSize?: number[];
            numDataElements?: number;
          };
          dataBuffer?: {
            dataType?: number;
            offset?: number;
            size?: number;
            offsets?: number[];
            numBanks?: number;
          };
          minX?: number;
          minY?: number;
          width?: number;
          height?: number;
          sampleModelTranslateX?: number;
          sampleModelTranslateY?: number;
          numBands?: number;
          numDataElements?: number;
          transferType?: number;
          bounds?: {
            x?: number;
            y?: number;
            width?: number;
            height?: number;
            bounds2D?: {
              minX?: number;
              minY?: number;
              maxX?: number;
              maxY?: number;
              centerX?: number;
              centerY?: number;
              x?: number;
              y?: number;
              empty?: boolean;
              width?: number;
              height?: number;
            };
            empty?: boolean;
            location?: { x?: number; y?: number };
            size?: { width?: number; height?: number };
            rect?: {
              minX?: number;
              minY?: number;
              maxX?: number;
              maxY?: number;
              centerX?: number;
              centerY?: number;
              x?: number;
              y?: number;
              empty?: boolean;
              width?: number;
              height?: number;
            };
            minX?: number;
            minY?: number;
            maxX?: number;
            maxY?: number;
            centerX?: number;
            centerY?: number;
          };
        };
        rect?: {
          sampleModel?: {
            width?: number;
            height?: number;
            numBands?: number;
            dataType?: number;
            transferType?: number;
            sampleSize?: number[];
            numDataElements?: number;
          };
          dataBuffer?: {
            dataType?: number;
            offset?: number;
            size?: number;
            offsets?: number[];
            numBanks?: number;
          };
          minX?: number;
          minY?: number;
          width?: number;
          height?: number;
          sampleModelTranslateX?: number;
          sampleModelTranslateY?: number;
          numBands?: number;
          numDataElements?: number;
          transferType?: number;
          bounds?: {
            x?: number;
            y?: number;
            width?: number;
            height?: number;
            bounds2D?: {
              minX?: number;
              minY?: number;
              maxX?: number;
              maxY?: number;
              centerX?: number;
              centerY?: number;
              x?: number;
              y?: number;
              empty?: boolean;
              width?: number;
              height?: number;
            };
            empty?: boolean;
            location?: { x?: number; y?: number };
            size?: { width?: number; height?: number };
            rect?: {
              minX?: number;
              minY?: number;
              maxX?: number;
              maxY?: number;
              centerX?: number;
              centerY?: number;
              x?: number;
              y?: number;
              empty?: boolean;
              width?: number;
              height?: number;
            };
            minX?: number;
            minY?: number;
            maxX?: number;
            maxY?: number;
            centerX?: number;
            centerY?: number;
          };
        };
        transferType?: number;
        bounds?: {
          x?: number;
          y?: number;
          width?: number;
          height?: number;
          bounds2D?: {
            minX?: number;
            minY?: number;
            maxX?: number;
            maxY?: number;
            centerX?: number;
            centerY?: number;
            x?: number;
            y?: number;
            empty?: boolean;
            width?: number;
            height?: number;
          };
          empty?: boolean;
          location?: { x?: number; y?: number };
          size?: { width?: number; height?: number };
          rect?: {
            minX?: number;
            minY?: number;
            maxX?: number;
            maxY?: number;
            centerX?: number;
            centerY?: number;
            x?: number;
            y?: number;
            empty?: boolean;
            width?: number;
            height?: number;
          };
          minX?: number;
          minY?: number;
          maxX?: number;
          maxY?: number;
          centerX?: number;
          centerY?: number;
        };
      };
      graphics?: {
        font?: {
          name?: string;
          style?: number;
          size?: number;
          fontName?: string;
          transform?: {
            scaleX?: number;
            shearY?: number;
            shearX?: number;
            scaleY?: number;
            translateX?: number;
            translateY?: number;
            toRotation?: number;
            toQuadrantRotation?: number;
            determinant?: number;
            type?: number;
            identity?: boolean;
          };
          bold?: boolean;
          italic?: boolean;
          numGlyphs?: number;
          missingGlyphCode?: number;
          italicAngle?: number;
          transformed?: boolean;
          psname?: string;
          size2D?: number;
          availableAttributes?: Record<string, any>[];
          attributes?: Record<string, any>;
          family?: string;
          plain?: boolean;
        };
        color?: {
          red?: number;
          green?: number;
          blue?: number;
          alpha?: number;
          rgb?: number;
          colorSpace?: { type?: number; numComponents?: number; cs_sRGB?: boolean };
          transparency?: number;
        };
        fontMetrics?: {
          font?: {
            name?: string;
            style?: number;
            size?: number;
            fontName?: string;
            transform?: {
              scaleX?: number;
              shearY?: number;
              shearX?: number;
              scaleY?: number;
              translateX?: number;
              translateY?: number;
              toRotation?: number;
              toQuadrantRotation?: number;
              determinant?: number;
              type?: number;
              identity?: boolean;
            };
            bold?: boolean;
            italic?: boolean;
            numGlyphs?: number;
            missingGlyphCode?: number;
            italicAngle?: number;
            transformed?: boolean;
            psname?: string;
            size2D?: number;
            availableAttributes?: Record<string, any>[];
            attributes?: Record<string, any>;
            family?: string;
            plain?: boolean;
          };
          fontRenderContext?: {
            transform?: {
              scaleX?: number;
              shearY?: number;
              shearX?: number;
              scaleY?: number;
              translateX?: number;
              translateY?: number;
              toRotation?: number;
              toQuadrantRotation?: number;
              determinant?: number;
              type?: number;
              identity?: boolean;
            };
            antiAliasingHint?: Record<string, any>;
            fractionalMetricsHint?: Record<string, any>;
            transformed?: boolean;
            antiAliased?: boolean;
            transformType?: number;
          };
          leading?: number;
          ascent?: number;
          descent?: number;
          maxDescent?: number;
          widths?: number[];
          maxAscent?: number;
          maxDecent?: number;
          maxAdvance?: number;
          height?: number;
        };
        clipBounds?: {
          x?: number;
          y?: number;
          width?: number;
          height?: number;
          bounds2D?: {
            minX?: number;
            minY?: number;
            maxX?: number;
            maxY?: number;
            centerX?: number;
            centerY?: number;
            x?: number;
            y?: number;
            empty?: boolean;
            width?: number;
            height?: number;
          };
          empty?: boolean;
          location?: { x?: number; y?: number };
          size?: { width?: number; height?: number };
          rect?: {
            minX?: number;
            minY?: number;
            maxX?: number;
            maxY?: number;
            centerX?: number;
            centerY?: number;
            x?: number;
            y?: number;
            empty?: boolean;
            width?: number;
            height?: number;
          };
          minX?: number;
          minY?: number;
          maxX?: number;
          maxY?: number;
          centerX?: number;
          centerY?: number;
        };
        xormode?: {
          red?: number;
          green?: number;
          blue?: number;
          alpha?: number;
          rgb?: number;
          colorSpace?: { type?: number; numComponents?: number; cs_sRGB?: boolean };
          transparency?: number;
        };
        clip?: {
          bounds2D?: {
            minX?: number;
            minY?: number;
            maxX?: number;
            maxY?: number;
            centerX?: number;
            centerY?: number;
            x?: number;
            y?: number;
            empty?: boolean;
            width?: number;
            height?: number;
          };
          bounds?: {
            x?: number;
            y?: number;
            width?: number;
            height?: number;
            bounds2D?: {
              minX?: number;
              minY?: number;
              maxX?: number;
              maxY?: number;
              centerX?: number;
              centerY?: number;
              x?: number;
              y?: number;
              empty?: boolean;
              width?: number;
              height?: number;
            };
            empty?: boolean;
            location?: { x?: number; y?: number };
            size?: { width?: number; height?: number };
            rect?: {
              minX?: number;
              minY?: number;
              maxX?: number;
              maxY?: number;
              centerX?: number;
              centerY?: number;
              x?: number;
              y?: number;
              empty?: boolean;
              width?: number;
              height?: number;
            };
            minX?: number;
            minY?: number;
            maxX?: number;
            maxY?: number;
            centerX?: number;
            centerY?: number;
          };
        };
        clipRect?: {
          x?: number;
          y?: number;
          width?: number;
          height?: number;
          bounds2D?: {
            minX?: number;
            minY?: number;
            maxX?: number;
            maxY?: number;
            centerX?: number;
            centerY?: number;
            x?: number;
            y?: number;
            empty?: boolean;
            width?: number;
            height?: number;
          };
          empty?: boolean;
          location?: { x?: number; y?: number };
          size?: { width?: number; height?: number };
          rect?: {
            minX?: number;
            minY?: number;
            maxX?: number;
            maxY?: number;
            centerX?: number;
            centerY?: number;
            x?: number;
            y?: number;
            empty?: boolean;
            width?: number;
            height?: number;
          };
          minX?: number;
          minY?: number;
          maxX?: number;
          maxY?: number;
          centerX?: number;
          centerY?: number;
        };
      };
      writableTileIndices?: { x?: number; y?: number }[];
      data?: {
        sampleModel?: {
          width?: number;
          height?: number;
          numBands?: number;
          dataType?: number;
          transferType?: number;
          sampleSize?: number[];
          numDataElements?: number;
        };
        dataBuffer?: {
          dataType?: number;
          offset?: number;
          size?: number;
          offsets?: number[];
          numBanks?: number;
        };
        minX?: number;
        minY?: number;
        width?: number;
        height?: number;
        sampleModelTranslateX?: number;
        sampleModelTranslateY?: number;
        numBands?: number;
        numDataElements?: number;
        transferType?: number;
        bounds?: {
          x?: number;
          y?: number;
          width?: number;
          height?: number;
          bounds2D?: {
            minX?: number;
            minY?: number;
            maxX?: number;
            maxY?: number;
            centerX?: number;
            centerY?: number;
            x?: number;
            y?: number;
            empty?: boolean;
            width?: number;
            height?: number;
          };
          empty?: boolean;
          location?: { x?: number; y?: number };
          size?: { width?: number; height?: number };
          rect?: {
            minX?: number;
            minY?: number;
            maxX?: number;
            maxY?: number;
            centerX?: number;
            centerY?: number;
            x?: number;
            y?: number;
            empty?: boolean;
            width?: number;
            height?: number;
          };
          minX?: number;
          minY?: number;
          maxX?: number;
          maxY?: number;
          centerX?: number;
          centerY?: number;
        };
      };
      type?: number;
      source?: Record<string, any>;
      propertyNames?: string[];
      width?: number;
      sources?: {
        colorModel?: {
          transparency?: number;
          numComponents?: number;
          numColorComponents?: number;
          colorSpace?: { type?: number; numComponents?: number; cs_sRGB?: boolean };
          transferType?: number;
          alphaPremultiplied?: boolean;
          componentSize?: number[];
          pixelSize?: number;
        };
        sampleModel?: {
          width?: number;
          height?: number;
          numBands?: number;
          dataType?: number;
          transferType?: number;
          sampleSize?: number[];
          numDataElements?: number;
        };
        minX?: number;
        minY?: number;
        numXTiles?: number;
        numYTiles?: number;
        minTileX?: number;
        minTileY?: number;
        tileWidth?: number;
        tileHeight?: number;
        tileGridXOffset?: number;
        tileGridYOffset?: number;
        data?: {
          sampleModel?: {
            width?: number;
            height?: number;
            numBands?: number;
            dataType?: number;
            transferType?: number;
            sampleSize?: number[];
            numDataElements?: number;
          };
          dataBuffer?: {
            dataType?: number;
            offset?: number;
            size?: number;
            offsets?: number[];
            numBanks?: number;
          };
          minX?: number;
          minY?: number;
          width?: number;
          height?: number;
          sampleModelTranslateX?: number;
          sampleModelTranslateY?: number;
          numBands?: number;
          numDataElements?: number;
          transferType?: number;
          bounds?: {
            x?: number;
            y?: number;
            width?: number;
            height?: number;
            bounds2D?: {
              minX?: number;
              minY?: number;
              maxX?: number;
              maxY?: number;
              centerX?: number;
              centerY?: number;
              x?: number;
              y?: number;
              empty?: boolean;
              width?: number;
              height?: number;
            };
            empty?: boolean;
            location?: { x?: number; y?: number };
            size?: { width?: number; height?: number };
            rect?: {
              minX?: number;
              minY?: number;
              maxX?: number;
              maxY?: number;
              centerX?: number;
              centerY?: number;
              x?: number;
              y?: number;
              empty?: boolean;
              width?: number;
              height?: number;
            };
            minX?: number;
            minY?: number;
            maxX?: number;
            maxY?: number;
            centerX?: number;
            centerY?: number;
          };
        };
        propertyNames?: string[];
        width?: number;
        height?: number;
      }[];
      height?: number;
    };
  };

  type checkCaptchaCodeParams = {
    code: string;
  };

  type checkParams = {
    timestamp: string;
    nonce: string;
    signature: string;
    echostr: string;
  };

  type DeleteRequest = {
    id?: number;
  };

  type getPostVOByIdParams = {
    id: number;
  };

  type getTagVOByIdParams = {
    id: number;
  };

  type getUserByIdParams = {
    id: number;
  };

  type getUserVOByIdParams = {
    id: number;
  };

  type LoginUserVO = {
    id?: number;
    userName?: string;
    userAvatar?: string;
    userRole?: string;
    userEmail?: string;
    createTime?: string;
    updateTime?: string;
    token?: string;
  };

  type OrderItem = {
    column?: string;
    asc?: boolean;
  };

  type PagePost = {
    records?: Post[];
    total?: number;
    size?: number;
    current?: number;
    orders?: OrderItem[];
    optimizeCountSql?: PagePost;
    searchCount?: PagePost;
    optimizeJoinOfCountSql?: boolean;
    maxLimit?: number;
    countId?: string;
    pages?: number;
  };

  type PagePostVO = {
    records?: PostVO[];
    total?: number;
    size?: number;
    current?: number;
    orders?: OrderItem[];
    optimizeCountSql?: PagePostVO;
    searchCount?: PagePostVO;
    optimizeJoinOfCountSql?: boolean;
    maxLimit?: number;
    countId?: string;
    pages?: number;
  };

  type PageTag = {
    records?: Tag[];
    total?: number;
    size?: number;
    current?: number;
    orders?: OrderItem[];
    optimizeCountSql?: PageTag;
    searchCount?: PageTag;
    optimizeJoinOfCountSql?: boolean;
    maxLimit?: number;
    countId?: string;
    pages?: number;
  };

  type PageTagVO = {
    records?: TagVO[];
    total?: number;
    size?: number;
    current?: number;
    orders?: OrderItem[];
    optimizeCountSql?: PageTagVO;
    searchCount?: PageTagVO;
    optimizeJoinOfCountSql?: boolean;
    maxLimit?: number;
    countId?: string;
    pages?: number;
  };

  type PageUser = {
    records?: User[];
    total?: number;
    size?: number;
    current?: number;
    orders?: OrderItem[];
    optimizeCountSql?: PageUser;
    searchCount?: PageUser;
    optimizeJoinOfCountSql?: boolean;
    maxLimit?: number;
    countId?: string;
    pages?: number;
  };

  type PageUserVO = {
    records?: UserVO[];
    total?: number;
    size?: number;
    current?: number;
    orders?: OrderItem[];
    optimizeCountSql?: PageUserVO;
    searchCount?: PageUserVO;
    optimizeJoinOfCountSql?: boolean;
    maxLimit?: number;
    countId?: string;
    pages?: number;
  };

  type Post = {
    id?: number;
    title?: string;
    content?: string;
    cover?: string;
    tags?: string;
    thumbNum?: number;
    favourNum?: number;
    userId?: number;
    createTime?: string;
    updateTime?: string;
    isDelete?: number;
  };

  type PostAddRequest = {
    title?: string;
    content?: string;
    cover?: string;
    tags?: string[];
  };

  type PostEditRequest = {
    id?: number;
    title?: string;
    content?: string;
    cover?: string;
    tags?: string[];
  };

  type PostFavourAddRequest = {
    postId?: number;
  };

  type PostFavourQueryRequest = {
    current?: number;
    pageSize?: number;
    sortField?: string;
    sortOrder?: string;
    postQueryRequest?: PostQueryRequest;
    userId?: number;
  };

  type PostQueryRequest = {
    current?: number;
    pageSize?: number;
    sortField?: string;
    sortOrder?: string;
    id?: number;
    notId?: number;
    searchText?: string;
    title?: string;
    content?: string;
    tags?: string[];
    orTags?: string[];
    userId?: number;
    favourUserId?: number;
  };

  type PostThumbAddRequest = {
    postId?: number;
  };

  type PostUpdateRequest = {
    id?: number;
    title?: string;
    content?: string;
    cover?: string;
    tags?: string[];
  };

  type PostVO = {
    id?: number;
    title?: string;
    content?: string;
    cover?: string;
    thumbNum?: number;
    favourNum?: number;
    userId?: number;
    createTime?: string;
    updateTime?: string;
    tags?: string[];
    userVO?: UserVO;
    hasThumb?: boolean;
    hasFavour?: boolean;
  };

  type SearchRequest = {
    current?: number;
    pageSize?: number;
    sortField?: string;
    sortOrder?: string;
    searchText?: string;
    type?: string;
  };

  type SearchVOObject = {
    dataList?: Record<string, any>[];
  };

  type Tag = {
    id?: number;
    tagName?: string;
    userId?: number;
    parentId?: number;
    isParent?: number;
    createTime?: string;
    updateTime?: string;
    isDelete?: number;
  };

  type TagAddRequest = {
    tagName?: string;
    parentId?: number;
    isParent?: number;
  };

  type TagEditRequest = {
    id?: number;
    tagName?: string;
  };

  type TagQueryRequest = {
    current?: number;
    pageSize?: number;
    sortField?: string;
    sortOrder?: string;
    id?: number;
    tagName?: string;
    userId?: number;
    parentId?: number;
    isParent?: number;
  };

  type TagUpdateRequest = {
    id?: number;
    tagName?: string;
    parentId?: number;
    isParent?: number;
    idList?: number[];
  };

  type TagVO = {
    id?: number;
    tagName?: string;
    userId?: number;
    parentId?: number;
    isParent?: number;
    createTime?: string;
    updateTime?: string;
    userVO?: UserVO;
  };

  type uploadFileParams = {
    uploadFileRequest: UploadFileRequest;
  };

  type UploadFileRequest = {
    biz?: string;
  };

  type User = {
    id?: number;
    userAccount?: string;
    userPassword?: string;
    unionId?: string;
    mpOpenId?: string;
    userName?: string;
    userAvatar?: string;
    userRole?: string;
    userEmail?: string;
    createTime?: string;
    updateTime?: string;
    isDelete?: number;
  };

  type UserAddRequest = {
    userName?: string;
    userAccount?: string;
    userAvatar?: string;
    userRole?: string;
    userEmail?: string;
  };

  type UserEditRequest = {
    userName?: string;
    userPassword?: string;
    userAvatar?: string;
    userEmail?: string;
  };

  type userLoginByWxOpenParams = {
    code: string;
  };

  type UserLoginRequest = {
    userAccount?: string;
    userPassword?: string;
  };

  type UserQueryRequest = {
    current?: number;
    pageSize?: number;
    sortField?: string;
    sortOrder?: string;
    id?: number;
    notId?: number;
    unionId?: string;
    mpOpenId?: string;
    userName?: string;
    userRole?: string;
    userEmail?: string;
    searchText?: string;
  };

  type UserRegisterRequest = {
    userAccount?: string;
    userPassword?: string;
    checkPassword?: string;
  };

  type UserUpdateRequest = {
    id?: number;
    userName?: string;
    userPassword?: string;
    userAvatar?: string;
    userRole?: string;
    userEmail?: string;
  };

  type UserVO = {
    id?: number;
    userName?: string;
    unionId?: string;
    mpOpenId?: string;
    userAvatar?: string;
    userRole?: string;
    userEmail?: string;
    createTime?: string;
    updateTime?: string;
  };
}
