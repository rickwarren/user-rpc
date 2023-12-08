// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
// Source: src/protos/permissions.proto
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

export interface GetPermissionsResponseDto {
  permissions: PermissionsDto[];
}

export interface DeletePermissionResponseDto {
  success: boolean;
}

export interface PermissionId {
  id: string;
}

export interface CreatePermissionDto {
  userId: string;
  permission: string;
}

export interface PermissionsDto {
  id: string;
  userId: string;
  permission: string;
  createdAt: protoscript.Timestamp;
  updatedAt: protoscript.Timestamp;
}

//========================================//
//    PermissionsProto Protobuf Client    //
//========================================//

export async function getPermissions(
  permissionId: PermissionId,
  config?: ClientConfiguration,
): Promise<GetPermissionsResponseDto> {
  const response = await PBrequest(
    "/PermissionsProto/getPermissions",
    PermissionId.encode(permissionId),
    config,
  );
  return GetPermissionsResponseDto.decode(response);
}

export async function createPermission(
  createPermissionDto: CreatePermissionDto,
  config?: ClientConfiguration,
): Promise<PermissionsDto> {
  const response = await PBrequest(
    "/PermissionsProto/createPermission",
    CreatePermissionDto.encode(createPermissionDto),
    config,
  );
  return PermissionsDto.decode(response);
}

export async function deletePermissions(
  permissionId: PermissionId,
  config?: ClientConfiguration,
): Promise<DeletePermissionResponseDto> {
  const response = await PBrequest(
    "/PermissionsProto/deletePermissions",
    PermissionId.encode(permissionId),
    config,
  );
  return DeletePermissionResponseDto.decode(response);
}

//========================================//
//      PermissionsProto JSON Client      //
//========================================//

export async function getPermissionsJSON(
  permissionId: PermissionId,
  config?: ClientConfiguration,
): Promise<GetPermissionsResponseDto> {
  const response = await JSONrequest(
    "/PermissionsProto/getPermissions",
    PermissionIdJSON.encode(permissionId),
    config,
  );
  return GetPermissionsResponseDtoJSON.decode(response);
}

export async function createPermissionJSON(
  createPermissionDto: CreatePermissionDto,
  config?: ClientConfiguration,
): Promise<PermissionsDto> {
  const response = await JSONrequest(
    "/PermissionsProto/createPermission",
    CreatePermissionDtoJSON.encode(createPermissionDto),
    config,
  );
  return PermissionsDtoJSON.decode(response);
}

export async function deletePermissionsJSON(
  permissionId: PermissionId,
  config?: ClientConfiguration,
): Promise<DeletePermissionResponseDto> {
  const response = await JSONrequest(
    "/PermissionsProto/deletePermissions",
    PermissionIdJSON.encode(permissionId),
    config,
  );
  return DeletePermissionResponseDtoJSON.decode(response);
}

//========================================//
//            PermissionsProto            //
//========================================//

export interface PermissionsProto<Context = unknown> {
  getPermissions: (
    permissionId: PermissionId,
    context: Context,
  ) => Promise<GetPermissionsResponseDto> | GetPermissionsResponseDto;
  createPermission: (
    createPermissionDto: CreatePermissionDto,
    context: Context,
  ) => Promise<PermissionsDto> | PermissionsDto;
  deletePermissions: (
    permissionId: PermissionId,
    context: Context,
  ) => Promise<DeletePermissionResponseDto> | DeletePermissionResponseDto;
}

export function createPermissionsProto<Context>(
  service: PermissionsProto<Context>,
) {
  return {
    name: "PermissionsProto",
    methods: {
      getPermissions: {
        name: "getPermissions",
        handler: service.getPermissions,
        input: { protobuf: PermissionId, json: PermissionIdJSON },
        output: {
          protobuf: GetPermissionsResponseDto,
          json: GetPermissionsResponseDtoJSON,
        },
      },
      createPermission: {
        name: "createPermission",
        handler: service.createPermission,
        input: { protobuf: CreatePermissionDto, json: CreatePermissionDtoJSON },
        output: { protobuf: PermissionsDto, json: PermissionsDtoJSON },
      },
      deletePermissions: {
        name: "deletePermissions",
        handler: service.deletePermissions,
        input: { protobuf: PermissionId, json: PermissionIdJSON },
        output: {
          protobuf: DeletePermissionResponseDto,
          json: DeletePermissionResponseDtoJSON,
        },
      },
    },
  } as const;
}

//========================================//
//        Protobuf Encode / Decode        //
//========================================//

export const GetPermissionsResponseDto = {
  /**
   * Serializes GetPermissionsResponseDto to protobuf.
   */
  encode: function (msg: PartialDeep<GetPermissionsResponseDto>): Uint8Array {
    return GetPermissionsResponseDto._writeMessage(
      msg,
      new protoscript.BinaryWriter(),
    ).getResultBuffer();
  },

  /**
   * Deserializes GetPermissionsResponseDto from protobuf.
   */
  decode: function (bytes: ByteSource): GetPermissionsResponseDto {
    return GetPermissionsResponseDto._readMessage(
      GetPermissionsResponseDto.initialize(),
      new protoscript.BinaryReader(bytes),
    );
  },

  /**
   * Initializes GetPermissionsResponseDto with all fields set to their default value.
   */
  initialize: function (
    msg?: Partial<GetPermissionsResponseDto>,
  ): GetPermissionsResponseDto {
    return {
      permissions: [],
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (
    msg: PartialDeep<GetPermissionsResponseDto>,
    writer: protoscript.BinaryWriter,
  ): protoscript.BinaryWriter {
    if (msg.permissions?.length) {
      writer.writeRepeatedMessage(
        1,
        msg.permissions as any,
        PermissionsDto._writeMessage,
      );
    }
    return writer;
  },

  /**
   * @private
   */
  _readMessage: function (
    msg: GetPermissionsResponseDto,
    reader: protoscript.BinaryReader,
  ): GetPermissionsResponseDto {
    while (reader.nextField()) {
      const field = reader.getFieldNumber();
      switch (field) {
        case 1: {
          const m = PermissionsDto.initialize();
          reader.readMessage(m, PermissionsDto._readMessage);
          msg.permissions.push(m);
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

export const DeletePermissionResponseDto = {
  /**
   * Serializes DeletePermissionResponseDto to protobuf.
   */
  encode: function (msg: PartialDeep<DeletePermissionResponseDto>): Uint8Array {
    return DeletePermissionResponseDto._writeMessage(
      msg,
      new protoscript.BinaryWriter(),
    ).getResultBuffer();
  },

  /**
   * Deserializes DeletePermissionResponseDto from protobuf.
   */
  decode: function (bytes: ByteSource): DeletePermissionResponseDto {
    return DeletePermissionResponseDto._readMessage(
      DeletePermissionResponseDto.initialize(),
      new protoscript.BinaryReader(bytes),
    );
  },

  /**
   * Initializes DeletePermissionResponseDto with all fields set to their default value.
   */
  initialize: function (
    msg?: Partial<DeletePermissionResponseDto>,
  ): DeletePermissionResponseDto {
    return {
      success: false,
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (
    msg: PartialDeep<DeletePermissionResponseDto>,
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
    msg: DeletePermissionResponseDto,
    reader: protoscript.BinaryReader,
  ): DeletePermissionResponseDto {
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

export const PermissionId = {
  /**
   * Serializes PermissionId to protobuf.
   */
  encode: function (msg: PartialDeep<PermissionId>): Uint8Array {
    return PermissionId._writeMessage(
      msg,
      new protoscript.BinaryWriter(),
    ).getResultBuffer();
  },

  /**
   * Deserializes PermissionId from protobuf.
   */
  decode: function (bytes: ByteSource): PermissionId {
    return PermissionId._readMessage(
      PermissionId.initialize(),
      new protoscript.BinaryReader(bytes),
    );
  },

  /**
   * Initializes PermissionId with all fields set to their default value.
   */
  initialize: function (msg?: Partial<PermissionId>): PermissionId {
    return {
      id: "",
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (
    msg: PartialDeep<PermissionId>,
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
    msg: PermissionId,
    reader: protoscript.BinaryReader,
  ): PermissionId {
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

export const CreatePermissionDto = {
  /**
   * Serializes CreatePermissionDto to protobuf.
   */
  encode: function (msg: PartialDeep<CreatePermissionDto>): Uint8Array {
    return CreatePermissionDto._writeMessage(
      msg,
      new protoscript.BinaryWriter(),
    ).getResultBuffer();
  },

  /**
   * Deserializes CreatePermissionDto from protobuf.
   */
  decode: function (bytes: ByteSource): CreatePermissionDto {
    return CreatePermissionDto._readMessage(
      CreatePermissionDto.initialize(),
      new protoscript.BinaryReader(bytes),
    );
  },

  /**
   * Initializes CreatePermissionDto with all fields set to their default value.
   */
  initialize: function (
    msg?: Partial<CreatePermissionDto>,
  ): CreatePermissionDto {
    return {
      userId: "",
      permission: "",
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (
    msg: PartialDeep<CreatePermissionDto>,
    writer: protoscript.BinaryWriter,
  ): protoscript.BinaryWriter {
    if (msg.userId) {
      writer.writeString(1, msg.userId);
    }
    if (msg.permission) {
      writer.writeString(2, msg.permission);
    }
    return writer;
  },

  /**
   * @private
   */
  _readMessage: function (
    msg: CreatePermissionDto,
    reader: protoscript.BinaryReader,
  ): CreatePermissionDto {
    while (reader.nextField()) {
      const field = reader.getFieldNumber();
      switch (field) {
        case 1: {
          msg.userId = reader.readString();
          break;
        }
        case 2: {
          msg.permission = reader.readString();
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

export const PermissionsDto = {
  /**
   * Serializes PermissionsDto to protobuf.
   */
  encode: function (msg: PartialDeep<PermissionsDto>): Uint8Array {
    return PermissionsDto._writeMessage(
      msg,
      new protoscript.BinaryWriter(),
    ).getResultBuffer();
  },

  /**
   * Deserializes PermissionsDto from protobuf.
   */
  decode: function (bytes: ByteSource): PermissionsDto {
    return PermissionsDto._readMessage(
      PermissionsDto.initialize(),
      new protoscript.BinaryReader(bytes),
    );
  },

  /**
   * Initializes PermissionsDto with all fields set to their default value.
   */
  initialize: function (msg?: Partial<PermissionsDto>): PermissionsDto {
    return {
      id: "",
      userId: "",
      permission: "",
      createdAt: protoscript.Timestamp.initialize(),
      updatedAt: protoscript.Timestamp.initialize(),
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (
    msg: PartialDeep<PermissionsDto>,
    writer: protoscript.BinaryWriter,
  ): protoscript.BinaryWriter {
    if (msg.id) {
      writer.writeString(1, msg.id);
    }
    if (msg.userId) {
      writer.writeString(2, msg.userId);
    }
    if (msg.permission) {
      writer.writeString(3, msg.permission);
    }
    if (msg.createdAt) {
      writer.writeMessage(
        4,
        msg.createdAt,
        protoscript.Timestamp._writeMessage,
      );
    }
    if (msg.updatedAt) {
      writer.writeMessage(
        5,
        msg.updatedAt,
        protoscript.Timestamp._writeMessage,
      );
    }
    return writer;
  },

  /**
   * @private
   */
  _readMessage: function (
    msg: PermissionsDto,
    reader: protoscript.BinaryReader,
  ): PermissionsDto {
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
          msg.permission = reader.readString();
          break;
        }
        case 4: {
          reader.readMessage(msg.createdAt, protoscript.Timestamp._readMessage);
          break;
        }
        case 5: {
          reader.readMessage(msg.updatedAt, protoscript.Timestamp._readMessage);
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

export const GetPermissionsResponseDtoJSON = {
  /**
   * Serializes GetPermissionsResponseDto to JSON.
   */
  encode: function (msg: PartialDeep<GetPermissionsResponseDto>): string {
    return JSON.stringify(GetPermissionsResponseDtoJSON._writeMessage(msg));
  },

  /**
   * Deserializes GetPermissionsResponseDto from JSON.
   */
  decode: function (json: string): GetPermissionsResponseDto {
    return GetPermissionsResponseDtoJSON._readMessage(
      GetPermissionsResponseDtoJSON.initialize(),
      JSON.parse(json),
    );
  },

  /**
   * Initializes GetPermissionsResponseDto with all fields set to their default value.
   */
  initialize: function (
    msg?: Partial<GetPermissionsResponseDto>,
  ): GetPermissionsResponseDto {
    return {
      permissions: [],
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (
    msg: PartialDeep<GetPermissionsResponseDto>,
  ): Record<string, unknown> {
    const json: Record<string, unknown> = {};
    if (msg.permissions?.length) {
      json["permissions"] = msg.permissions.map(
        PermissionsDtoJSON._writeMessage,
      );
    }
    return json;
  },

  /**
   * @private
   */
  _readMessage: function (
    msg: GetPermissionsResponseDto,
    json: any,
  ): GetPermissionsResponseDto {
    const _permissions_ = json["permissions"];
    if (_permissions_) {
      for (const item of _permissions_) {
        const m = PermissionsDtoJSON.initialize();
        PermissionsDtoJSON._readMessage(m, item);
        msg.permissions.push(m);
      }
    }
    return msg;
  },
};

export const DeletePermissionResponseDtoJSON = {
  /**
   * Serializes DeletePermissionResponseDto to JSON.
   */
  encode: function (msg: PartialDeep<DeletePermissionResponseDto>): string {
    return JSON.stringify(DeletePermissionResponseDtoJSON._writeMessage(msg));
  },

  /**
   * Deserializes DeletePermissionResponseDto from JSON.
   */
  decode: function (json: string): DeletePermissionResponseDto {
    return DeletePermissionResponseDtoJSON._readMessage(
      DeletePermissionResponseDtoJSON.initialize(),
      JSON.parse(json),
    );
  },

  /**
   * Initializes DeletePermissionResponseDto with all fields set to their default value.
   */
  initialize: function (
    msg?: Partial<DeletePermissionResponseDto>,
  ): DeletePermissionResponseDto {
    return {
      success: false,
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (
    msg: PartialDeep<DeletePermissionResponseDto>,
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
    msg: DeletePermissionResponseDto,
    json: any,
  ): DeletePermissionResponseDto {
    const _success_ = json["success"];
    if (_success_) {
      msg.success = _success_;
    }
    return msg;
  },
};

export const PermissionIdJSON = {
  /**
   * Serializes PermissionId to JSON.
   */
  encode: function (msg: PartialDeep<PermissionId>): string {
    return JSON.stringify(PermissionIdJSON._writeMessage(msg));
  },

  /**
   * Deserializes PermissionId from JSON.
   */
  decode: function (json: string): PermissionId {
    return PermissionIdJSON._readMessage(
      PermissionIdJSON.initialize(),
      JSON.parse(json),
    );
  },

  /**
   * Initializes PermissionId with all fields set to their default value.
   */
  initialize: function (msg?: Partial<PermissionId>): PermissionId {
    return {
      id: "",
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (
    msg: PartialDeep<PermissionId>,
  ): Record<string, unknown> {
    const json: Record<string, unknown> = {};
    if (msg.id) {
      json["id"] = msg.id;
    }
    return json;
  },

  /**
   * @private
   */
  _readMessage: function (msg: PermissionId, json: any): PermissionId {
    const _id_ = json["id"];
    if (_id_) {
      msg.id = _id_;
    }
    return msg;
  },
};

export const CreatePermissionDtoJSON = {
  /**
   * Serializes CreatePermissionDto to JSON.
   */
  encode: function (msg: PartialDeep<CreatePermissionDto>): string {
    return JSON.stringify(CreatePermissionDtoJSON._writeMessage(msg));
  },

  /**
   * Deserializes CreatePermissionDto from JSON.
   */
  decode: function (json: string): CreatePermissionDto {
    return CreatePermissionDtoJSON._readMessage(
      CreatePermissionDtoJSON.initialize(),
      JSON.parse(json),
    );
  },

  /**
   * Initializes CreatePermissionDto with all fields set to their default value.
   */
  initialize: function (
    msg?: Partial<CreatePermissionDto>,
  ): CreatePermissionDto {
    return {
      userId: "",
      permission: "",
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (
    msg: PartialDeep<CreatePermissionDto>,
  ): Record<string, unknown> {
    const json: Record<string, unknown> = {};
    if (msg.userId) {
      json["userId"] = msg.userId;
    }
    if (msg.permission) {
      json["permission"] = msg.permission;
    }
    return json;
  },

  /**
   * @private
   */
  _readMessage: function (
    msg: CreatePermissionDto,
    json: any,
  ): CreatePermissionDto {
    const _userId_ = json["userId"];
    if (_userId_) {
      msg.userId = _userId_;
    }
    const _permission_ = json["permission"];
    if (_permission_) {
      msg.permission = _permission_;
    }
    return msg;
  },
};

export const PermissionsDtoJSON = {
  /**
   * Serializes PermissionsDto to JSON.
   */
  encode: function (msg: PartialDeep<PermissionsDto>): string {
    return JSON.stringify(PermissionsDtoJSON._writeMessage(msg));
  },

  /**
   * Deserializes PermissionsDto from JSON.
   */
  decode: function (json: string): PermissionsDto {
    return PermissionsDtoJSON._readMessage(
      PermissionsDtoJSON.initialize(),
      JSON.parse(json),
    );
  },

  /**
   * Initializes PermissionsDto with all fields set to their default value.
   */
  initialize: function (msg?: Partial<PermissionsDto>): PermissionsDto {
    return {
      id: "",
      userId: "",
      permission: "",
      createdAt: protoscript.TimestampJSON.initialize(),
      updatedAt: protoscript.TimestampJSON.initialize(),
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (
    msg: PartialDeep<PermissionsDto>,
  ): Record<string, unknown> {
    const json: Record<string, unknown> = {};
    if (msg.id) {
      json["id"] = msg.id;
    }
    if (msg.userId) {
      json["userId"] = msg.userId;
    }
    if (msg.permission) {
      json["permission"] = msg.permission;
    }
    if (msg.createdAt && msg.createdAt.seconds && msg.createdAt.nanos) {
      json["createdAt"] = protoscript.serializeTimestamp(msg.createdAt);
    }
    if (msg.updatedAt && msg.updatedAt.seconds && msg.updatedAt.nanos) {
      json["updatedAt"] = protoscript.serializeTimestamp(msg.updatedAt);
    }
    return json;
  },

  /**
   * @private
   */
  _readMessage: function (msg: PermissionsDto, json: any): PermissionsDto {
    const _id_ = json["id"];
    if (_id_) {
      msg.id = _id_;
    }
    const _userId_ = json["userId"];
    if (_userId_) {
      msg.userId = _userId_;
    }
    const _permission_ = json["permission"];
    if (_permission_) {
      msg.permission = _permission_;
    }
    const _createdAt_ = json["createdAt"] ?? json["created_at"];
    if (_createdAt_) {
      msg.createdAt = protoscript.parseTimestamp(_createdAt_);
    }
    const _updatedAt_ = json["updatedAt"] ?? json["updated_at"];
    if (_updatedAt_) {
      msg.updatedAt = protoscript.parseTimestamp(_updatedAt_);
    }
    return msg;
  },
};
