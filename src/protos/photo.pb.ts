// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
// Source: src/protos/photo.proto
/* eslint-disable */

import type { ByteSource, PartialDeep } from "protoscript";
import * as protoscript from "protoscript";
import { JSONrequest, PBrequest } from "twirpscript";
// This is the minimum version supported by the current runtime.
// If this line fails typechecking, breaking changes have been introduced and this
// file needs to be regenerated by running `npx twirpscript`.
export { MIN_SUPPORTED_VERSION_0_0_56 } from "twirpscript";
import type { ClientConfiguration } from "twirpscript";

//========================================//
//                 Types                  //
//========================================//

export interface PhotosResponseDto {
  photos: PhotoDto[];
}

export interface DeletePhotoResponseDto {
  success: boolean;
}

export interface PhotoId {
  id: string;
}

export interface CreatePhotoDto {
  userId: string;
  localFileId: string;
}

export interface PhotoDto {
  id: string;
  userId: string;
  localFileId: string;
}

//========================================//
//       PhotoProto Protobuf Client       //
//========================================//

export async function getPhotos(
  photoId: PhotoId,
  config?: ClientConfiguration,
): Promise<PhotosResponseDto> {
  const response = await PBrequest(
    "/PhotoProto/getPhotos",
    PhotoId.encode(photoId),
    config,
  );
  return PhotosResponseDto.decode(response);
}

export async function getPhoto(
  photoId: PhotoId,
  config?: ClientConfiguration,
): Promise<PhotoDto> {
  const response = await PBrequest(
    "/PhotoProto/getPhoto",
    PhotoId.encode(photoId),
    config,
  );
  return PhotoDto.decode(response);
}

export async function createPhoto(
  createPhotoDto: CreatePhotoDto,
  config?: ClientConfiguration,
): Promise<PhotoDto> {
  const response = await PBrequest(
    "/PhotoProto/createPhoto",
    CreatePhotoDto.encode(createPhotoDto),
    config,
  );
  return PhotoDto.decode(response);
}

export async function deletePhoto(
  photoId: PhotoId,
  config?: ClientConfiguration,
): Promise<DeletePhotoResponseDto> {
  const response = await PBrequest(
    "/PhotoProto/deletePhoto",
    PhotoId.encode(photoId),
    config,
  );
  return DeletePhotoResponseDto.decode(response);
}

//========================================//
//         PhotoProto JSON Client         //
//========================================//

export async function getPhotosJSON(
  photoId: PhotoId,
  config?: ClientConfiguration,
): Promise<PhotosResponseDto> {
  const response = await JSONrequest(
    "/PhotoProto/getPhotos",
    PhotoIdJSON.encode(photoId),
    config,
  );
  return PhotosResponseDtoJSON.decode(response);
}

export async function getPhotoJSON(
  photoId: PhotoId,
  config?: ClientConfiguration,
): Promise<PhotoDto> {
  const response = await JSONrequest(
    "/PhotoProto/getPhoto",
    PhotoIdJSON.encode(photoId),
    config,
  );
  return PhotoDtoJSON.decode(response);
}

export async function createPhotoJSON(
  createPhotoDto: CreatePhotoDto,
  config?: ClientConfiguration,
): Promise<PhotoDto> {
  const response = await JSONrequest(
    "/PhotoProto/createPhoto",
    CreatePhotoDtoJSON.encode(createPhotoDto),
    config,
  );
  return PhotoDtoJSON.decode(response);
}

export async function deletePhotoJSON(
  photoId: PhotoId,
  config?: ClientConfiguration,
): Promise<DeletePhotoResponseDto> {
  const response = await JSONrequest(
    "/PhotoProto/deletePhoto",
    PhotoIdJSON.encode(photoId),
    config,
  );
  return DeletePhotoResponseDtoJSON.decode(response);
}

//========================================//
//               PhotoProto               //
//========================================//

export interface PhotoProto<Context = unknown> {
  getPhotos: (
    photoId: PhotoId,
    context: Context,
  ) => Promise<PhotosResponseDto> | PhotosResponseDto;
  getPhoto: (
    photoId: PhotoId,
    context: Context,
  ) => Promise<PhotoDto> | PhotoDto;
  createPhoto: (
    createPhotoDto: CreatePhotoDto,
    context: Context,
  ) => Promise<PhotoDto> | PhotoDto;
  deletePhoto: (
    photoId: PhotoId,
    context: Context,
  ) => Promise<DeletePhotoResponseDto> | DeletePhotoResponseDto;
}

export function createPhotoProto<Context>(service: PhotoProto<Context>) {
  return {
    name: "PhotoProto",
    methods: {
      getPhotos: {
        name: "getPhotos",
        handler: service.getPhotos,
        input: { protobuf: PhotoId, json: PhotoIdJSON },
        output: { protobuf: PhotosResponseDto, json: PhotosResponseDtoJSON },
      },
      getPhoto: {
        name: "getPhoto",
        handler: service.getPhoto,
        input: { protobuf: PhotoId, json: PhotoIdJSON },
        output: { protobuf: PhotoDto, json: PhotoDtoJSON },
      },
      createPhoto: {
        name: "createPhoto",
        handler: service.createPhoto,
        input: { protobuf: CreatePhotoDto, json: CreatePhotoDtoJSON },
        output: { protobuf: PhotoDto, json: PhotoDtoJSON },
      },
      deletePhoto: {
        name: "deletePhoto",
        handler: service.deletePhoto,
        input: { protobuf: PhotoId, json: PhotoIdJSON },
        output: {
          protobuf: DeletePhotoResponseDto,
          json: DeletePhotoResponseDtoJSON,
        },
      },
    },
  } as const;
}

//========================================//
//        Protobuf Encode / Decode        //
//========================================//

export const PhotosResponseDto = {
  /**
   * Serializes PhotosResponseDto to protobuf.
   */
  encode: function (msg: PartialDeep<PhotosResponseDto>): Uint8Array {
    return PhotosResponseDto._writeMessage(
      msg,
      new protoscript.BinaryWriter(),
    ).getResultBuffer();
  },

  /**
   * Deserializes PhotosResponseDto from protobuf.
   */
  decode: function (bytes: ByteSource): PhotosResponseDto {
    return PhotosResponseDto._readMessage(
      PhotosResponseDto.initialize(),
      new protoscript.BinaryReader(bytes),
    );
  },

  /**
   * Initializes PhotosResponseDto with all fields set to their default value.
   */
  initialize: function (msg?: Partial<PhotosResponseDto>): PhotosResponseDto {
    return {
      photos: [],
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (
    msg: PartialDeep<PhotosResponseDto>,
    writer: protoscript.BinaryWriter,
  ): protoscript.BinaryWriter {
    if (msg.photos?.length) {
      writer.writeRepeatedMessage(1, msg.photos as any, PhotoDto._writeMessage);
    }
    return writer;
  },

  /**
   * @private
   */
  _readMessage: function (
    msg: PhotosResponseDto,
    reader: protoscript.BinaryReader,
  ): PhotosResponseDto {
    while (reader.nextField()) {
      const field = reader.getFieldNumber();
      switch (field) {
        case 1: {
          const m = PhotoDto.initialize();
          reader.readMessage(m, PhotoDto._readMessage);
          msg.photos.push(m);
          break;
        }
        default: {
          reader.skipField();
          break;
        }
      }
    }
    return msg;
  },
};

export const DeletePhotoResponseDto = {
  /**
   * Serializes DeletePhotoResponseDto to protobuf.
   */
  encode: function (msg: PartialDeep<DeletePhotoResponseDto>): Uint8Array {
    return DeletePhotoResponseDto._writeMessage(
      msg,
      new protoscript.BinaryWriter(),
    ).getResultBuffer();
  },

  /**
   * Deserializes DeletePhotoResponseDto from protobuf.
   */
  decode: function (bytes: ByteSource): DeletePhotoResponseDto {
    return DeletePhotoResponseDto._readMessage(
      DeletePhotoResponseDto.initialize(),
      new protoscript.BinaryReader(bytes),
    );
  },

  /**
   * Initializes DeletePhotoResponseDto with all fields set to their default value.
   */
  initialize: function (
    msg?: Partial<DeletePhotoResponseDto>,
  ): DeletePhotoResponseDto {
    return {
      success: false,
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (
    msg: PartialDeep<DeletePhotoResponseDto>,
    writer: protoscript.BinaryWriter,
  ): protoscript.BinaryWriter {
    if (msg.success) {
      writer.writeBool(1, msg.success);
    }
    return writer;
  },

  /**
   * @private
   */
  _readMessage: function (
    msg: DeletePhotoResponseDto,
    reader: protoscript.BinaryReader,
  ): DeletePhotoResponseDto {
    while (reader.nextField()) {
      const field = reader.getFieldNumber();
      switch (field) {
        case 1: {
          msg.success = reader.readBool();
          break;
        }
        default: {
          reader.skipField();
          break;
        }
      }
    }
    return msg;
  },
};

export const PhotoId = {
  /**
   * Serializes PhotoId to protobuf.
   */
  encode: function (msg: PartialDeep<PhotoId>): Uint8Array {
    return PhotoId._writeMessage(
      msg,
      new protoscript.BinaryWriter(),
    ).getResultBuffer();
  },

  /**
   * Deserializes PhotoId from protobuf.
   */
  decode: function (bytes: ByteSource): PhotoId {
    return PhotoId._readMessage(
      PhotoId.initialize(),
      new protoscript.BinaryReader(bytes),
    );
  },

  /**
   * Initializes PhotoId with all fields set to their default value.
   */
  initialize: function (msg?: Partial<PhotoId>): PhotoId {
    return {
      id: "",
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (
    msg: PartialDeep<PhotoId>,
    writer: protoscript.BinaryWriter,
  ): protoscript.BinaryWriter {
    if (msg.id) {
      writer.writeString(1, msg.id);
    }
    return writer;
  },

  /**
   * @private
   */
  _readMessage: function (
    msg: PhotoId,
    reader: protoscript.BinaryReader,
  ): PhotoId {
    while (reader.nextField()) {
      const field = reader.getFieldNumber();
      switch (field) {
        case 1: {
          msg.id = reader.readString();
          break;
        }
        default: {
          reader.skipField();
          break;
        }
      }
    }
    return msg;
  },
};

export const CreatePhotoDto = {
  /**
   * Serializes CreatePhotoDto to protobuf.
   */
  encode: function (msg: PartialDeep<CreatePhotoDto>): Uint8Array {
    return CreatePhotoDto._writeMessage(
      msg,
      new protoscript.BinaryWriter(),
    ).getResultBuffer();
  },

  /**
   * Deserializes CreatePhotoDto from protobuf.
   */
  decode: function (bytes: ByteSource): CreatePhotoDto {
    return CreatePhotoDto._readMessage(
      CreatePhotoDto.initialize(),
      new protoscript.BinaryReader(bytes),
    );
  },

  /**
   * Initializes CreatePhotoDto with all fields set to their default value.
   */
  initialize: function (msg?: Partial<CreatePhotoDto>): CreatePhotoDto {
    return {
      userId: "",
      localFileId: "",
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (
    msg: PartialDeep<CreatePhotoDto>,
    writer: protoscript.BinaryWriter,
  ): protoscript.BinaryWriter {
    if (msg.userId) {
      writer.writeString(1, msg.userId);
    }
    if (msg.localFileId) {
      writer.writeString(2, msg.localFileId);
    }
    return writer;
  },

  /**
   * @private
   */
  _readMessage: function (
    msg: CreatePhotoDto,
    reader: protoscript.BinaryReader,
  ): CreatePhotoDto {
    while (reader.nextField()) {
      const field = reader.getFieldNumber();
      switch (field) {
        case 1: {
          msg.userId = reader.readString();
          break;
        }
        case 2: {
          msg.localFileId = reader.readString();
          break;
        }
        default: {
          reader.skipField();
          break;
        }
      }
    }
    return msg;
  },
};

export const PhotoDto = {
  /**
   * Serializes PhotoDto to protobuf.
   */
  encode: function (msg: PartialDeep<PhotoDto>): Uint8Array {
    return PhotoDto._writeMessage(
      msg,
      new protoscript.BinaryWriter(),
    ).getResultBuffer();
  },

  /**
   * Deserializes PhotoDto from protobuf.
   */
  decode: function (bytes: ByteSource): PhotoDto {
    return PhotoDto._readMessage(
      PhotoDto.initialize(),
      new protoscript.BinaryReader(bytes),
    );
  },

  /**
   * Initializes PhotoDto with all fields set to their default value.
   */
  initialize: function (msg?: Partial<PhotoDto>): PhotoDto {
    return {
      id: "",
      userId: "",
      localFileId: "",
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (
    msg: PartialDeep<PhotoDto>,
    writer: protoscript.BinaryWriter,
  ): protoscript.BinaryWriter {
    if (msg.id) {
      writer.writeString(1, msg.id);
    }
    if (msg.userId) {
      writer.writeString(2, msg.userId);
    }
    if (msg.localFileId) {
      writer.writeString(3, msg.localFileId);
    }
    return writer;
  },

  /**
   * @private
   */
  _readMessage: function (
    msg: PhotoDto,
    reader: protoscript.BinaryReader,
  ): PhotoDto {
    while (reader.nextField()) {
      const field = reader.getFieldNumber();
      switch (field) {
        case 1: {
          msg.id = reader.readString();
          break;
        }
        case 2: {
          msg.userId = reader.readString();
          break;
        }
        case 3: {
          msg.localFileId = reader.readString();
          break;
        }
        default: {
          reader.skipField();
          break;
        }
      }
    }
    return msg;
  },
};

//========================================//
//          JSON Encode / Decode          //
//========================================//

export const PhotosResponseDtoJSON = {
  /**
   * Serializes PhotosResponseDto to JSON.
   */
  encode: function (msg: PartialDeep<PhotosResponseDto>): string {
    return JSON.stringify(PhotosResponseDtoJSON._writeMessage(msg));
  },

  /**
   * Deserializes PhotosResponseDto from JSON.
   */
  decode: function (json: string): PhotosResponseDto {
    return PhotosResponseDtoJSON._readMessage(
      PhotosResponseDtoJSON.initialize(),
      JSON.parse(json),
    );
  },

  /**
   * Initializes PhotosResponseDto with all fields set to their default value.
   */
  initialize: function (msg?: Partial<PhotosResponseDto>): PhotosResponseDto {
    return {
      photos: [],
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (
    msg: PartialDeep<PhotosResponseDto>,
  ): Record<string, unknown> {
    const json: Record<string, unknown> = {};
    if (msg.photos?.length) {
      json["photos"] = msg.photos.map(PhotoDtoJSON._writeMessage);
    }
    return json;
  },

  /**
   * @private
   */
  _readMessage: function (
    msg: PhotosResponseDto,
    json: any,
  ): PhotosResponseDto {
    const _photos_ = json["photos"];
    if (_photos_) {
      for (const item of _photos_) {
        const m = PhotoDtoJSON.initialize();
        PhotoDtoJSON._readMessage(m, item);
        msg.photos.push(m);
      }
    }
    return msg;
  },
};

export const DeletePhotoResponseDtoJSON = {
  /**
   * Serializes DeletePhotoResponseDto to JSON.
   */
  encode: function (msg: PartialDeep<DeletePhotoResponseDto>): string {
    return JSON.stringify(DeletePhotoResponseDtoJSON._writeMessage(msg));
  },

  /**
   * Deserializes DeletePhotoResponseDto from JSON.
   */
  decode: function (json: string): DeletePhotoResponseDto {
    return DeletePhotoResponseDtoJSON._readMessage(
      DeletePhotoResponseDtoJSON.initialize(),
      JSON.parse(json),
    );
  },

  /**
   * Initializes DeletePhotoResponseDto with all fields set to their default value.
   */
  initialize: function (
    msg?: Partial<DeletePhotoResponseDto>,
  ): DeletePhotoResponseDto {
    return {
      success: false,
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (
    msg: PartialDeep<DeletePhotoResponseDto>,
  ): Record<string, unknown> {
    const json: Record<string, unknown> = {};
    if (msg.success) {
      json["success"] = msg.success;
    }
    return json;
  },

  /**
   * @private
   */
  _readMessage: function (
    msg: DeletePhotoResponseDto,
    json: any,
  ): DeletePhotoResponseDto {
    const _success_ = json["success"];
    if (_success_) {
      msg.success = _success_;
    }
    return msg;
  },
};

export const PhotoIdJSON = {
  /**
   * Serializes PhotoId to JSON.
   */
  encode: function (msg: PartialDeep<PhotoId>): string {
    return JSON.stringify(PhotoIdJSON._writeMessage(msg));
  },

  /**
   * Deserializes PhotoId from JSON.
   */
  decode: function (json: string): PhotoId {
    return PhotoIdJSON._readMessage(PhotoIdJSON.initialize(), JSON.parse(json));
  },

  /**
   * Initializes PhotoId with all fields set to their default value.
   */
  initialize: function (msg?: Partial<PhotoId>): PhotoId {
    return {
      id: "",
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (msg: PartialDeep<PhotoId>): Record<string, unknown> {
    const json: Record<string, unknown> = {};
    if (msg.id) {
      json["id"] = msg.id;
    }
    return json;
  },

  /**
   * @private
   */
  _readMessage: function (msg: PhotoId, json: any): PhotoId {
    const _id_ = json["id"];
    if (_id_) {
      msg.id = _id_;
    }
    return msg;
  },
};

export const CreatePhotoDtoJSON = {
  /**
   * Serializes CreatePhotoDto to JSON.
   */
  encode: function (msg: PartialDeep<CreatePhotoDto>): string {
    return JSON.stringify(CreatePhotoDtoJSON._writeMessage(msg));
  },

  /**
   * Deserializes CreatePhotoDto from JSON.
   */
  decode: function (json: string): CreatePhotoDto {
    return CreatePhotoDtoJSON._readMessage(
      CreatePhotoDtoJSON.initialize(),
      JSON.parse(json),
    );
  },

  /**
   * Initializes CreatePhotoDto with all fields set to their default value.
   */
  initialize: function (msg?: Partial<CreatePhotoDto>): CreatePhotoDto {
    return {
      userId: "",
      localFileId: "",
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (
    msg: PartialDeep<CreatePhotoDto>,
  ): Record<string, unknown> {
    const json: Record<string, unknown> = {};
    if (msg.userId) {
      json["userId"] = msg.userId;
    }
    if (msg.localFileId) {
      json["localFileId"] = msg.localFileId;
    }
    return json;
  },

  /**
   * @private
   */
  _readMessage: function (msg: CreatePhotoDto, json: any): CreatePhotoDto {
    const _userId_ = json["userId"];
    if (_userId_) {
      msg.userId = _userId_;
    }
    const _localFileId_ = json["localFileId"];
    if (_localFileId_) {
      msg.localFileId = _localFileId_;
    }
    return msg;
  },
};

export const PhotoDtoJSON = {
  /**
   * Serializes PhotoDto to JSON.
   */
  encode: function (msg: PartialDeep<PhotoDto>): string {
    return JSON.stringify(PhotoDtoJSON._writeMessage(msg));
  },

  /**
   * Deserializes PhotoDto from JSON.
   */
  decode: function (json: string): PhotoDto {
    return PhotoDtoJSON._readMessage(
      PhotoDtoJSON.initialize(),
      JSON.parse(json),
    );
  },

  /**
   * Initializes PhotoDto with all fields set to their default value.
   */
  initialize: function (msg?: Partial<PhotoDto>): PhotoDto {
    return {
      id: "",
      userId: "",
      localFileId: "",
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (
    msg: PartialDeep<PhotoDto>,
  ): Record<string, unknown> {
    const json: Record<string, unknown> = {};
    if (msg.id) {
      json["id"] = msg.id;
    }
    if (msg.userId) {
      json["userId"] = msg.userId;
    }
    if (msg.localFileId) {
      json["localFileId"] = msg.localFileId;
    }
    return json;
  },

  /**
   * @private
   */
  _readMessage: function (msg: PhotoDto, json: any): PhotoDto {
    const _id_ = json["id"];
    if (_id_) {
      msg.id = _id_;
    }
    const _userId_ = json["userId"];
    if (_userId_) {
      msg.userId = _userId_;
    }
    const _localFileId_ = json["localFileId"];
    if (_localFileId_) {
      msg.localFileId = _localFileId_;
    }
    return msg;
  },
};
