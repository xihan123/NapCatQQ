// @generated by protobuf-ts 2.9.4
// @generated from protobuf file "SysMessage.proto" (package "SysMessage", syntax proto3)
// tslint:disable
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import { WireType } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
/**
 * @generated from protobuf message SysMessage.Data
 */
export interface Data {
    /**
     * @generated from protobuf field: repeated SysMessage.Header header = 1;
     */
    header: Header[];
    /**
     * @generated from protobuf field: repeated SysMessage.Body body = 2;
     */
    body: Body[];
}
/**
 * @generated from protobuf message SysMessage.Header
 */
export interface Header {
    /**
     * @generated from protobuf field: uint32 GroupNumber = 1 [json_name = "GroupNumber"];
     */
    groupNumber: number;
    /**
     * @generated from protobuf field: string GroupString = 2 [json_name = "GroupString"];
     */
    groupString: string;
    /**
     * @generated from protobuf field: uint32 QQ = 5 [json_name = "QQ"];
     */
    qQ: number;
    /**
     * @generated from protobuf field: optional string Uid = 6 [json_name = "Uid"];
     */
    uid?: string;
}
/**
 * @generated from protobuf message SysMessage.Body
 */
export interface Body {
    /**
     * @generated from protobuf field: uint32 MsgType = 1 [json_name = "MsgType"];
     */
    msgType: number;
    /**
     * @generated from protobuf field: uint32 SubType_0 = 2 [json_name = "SubType0"];
     */
    subType0: number;
    /**
     * @generated from protobuf field: uint32 SubType_1 = 3 [json_name = "SubType1"];
     */
    subType1: number;
    /**
     * @generated from protobuf field: uint32 MsgSeq = 5 [json_name = "MsgSeq"];
     */
    msgSeq: number;
    /**
     * @generated from protobuf field: uint32 Time = 6 [json_name = "Time"];
     */
    time: number;
    /**
     * @generated from protobuf field: uint64 MsgID = 12 [json_name = "MsgID"];
     */
    msgID: bigint;
    /**
     * @generated from protobuf field: uint32 Other = 13 [json_name = "Other"];
     */
    other: number;
}
// @generated message type with reflection information, may provide speed optimized methods
class Data$Type extends MessageType<Data> {
    constructor() {
        super("SysMessage.Data", [
            { no: 1, name: "header", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => Header },
            { no: 2, name: "body", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => Body }
        ]);
    }
    create(value?: PartialMessage<Data>): Data {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.header = [];
        message.body = [];
        if (value !== undefined)
            reflectionMergePartial<Data>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Data): Data {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated SysMessage.Header header */ 1:
                    message.header.push(Header.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated SysMessage.Body body */ 2:
                    message.body.push(Body.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: Data, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* repeated SysMessage.Header header = 1; */
        for (let i = 0; i < message.header.length; i++)
            Header.internalBinaryWrite(message.header[i], writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        /* repeated SysMessage.Body body = 2; */
        for (let i = 0; i < message.body.length; i++)
            Body.internalBinaryWrite(message.body[i], writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message SysMessage.Data
 */
export const Data = new Data$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Header$Type extends MessageType<Header> {
    constructor() {
        super("SysMessage.Header", [
            { no: 1, name: "GroupNumber", kind: "scalar", jsonName: "GroupNumber", T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "GroupString", kind: "scalar", jsonName: "GroupString", T: 9 /*ScalarType.STRING*/ },
            { no: 5, name: "QQ", kind: "scalar", jsonName: "QQ", T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "Uid", kind: "scalar", jsonName: "Uid", opt: true, T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value?: PartialMessage<Header>): Header {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.groupNumber = 0;
        message.groupString = "";
        message.qQ = 0;
        if (value !== undefined)
            reflectionMergePartial<Header>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Header): Header {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint32 GroupNumber = 1 [json_name = "GroupNumber"];*/ 1:
                    message.groupNumber = reader.uint32();
                    break;
                case /* string GroupString = 2 [json_name = "GroupString"];*/ 2:
                    message.groupString = reader.string();
                    break;
                case /* uint32 QQ = 5 [json_name = "QQ"];*/ 5:
                    message.qQ = reader.uint32();
                    break;
                case /* optional string Uid = 6 [json_name = "Uid"];*/ 6:
                    message.uid = reader.string();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: Header, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint32 GroupNumber = 1 [json_name = "GroupNumber"]; */
        if (message.groupNumber !== 0)
            writer.tag(1, WireType.Varint).uint32(message.groupNumber);
        /* string GroupString = 2 [json_name = "GroupString"]; */
        if (message.groupString !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.groupString);
        /* uint32 QQ = 5 [json_name = "QQ"]; */
        if (message.qQ !== 0)
            writer.tag(5, WireType.Varint).uint32(message.qQ);
        /* optional string Uid = 6 [json_name = "Uid"]; */
        if (message.uid !== undefined)
            writer.tag(6, WireType.LengthDelimited).string(message.uid);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message SysMessage.Header
 */
export const Header = new Header$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Body$Type extends MessageType<Body> {
    constructor() {
        super("SysMessage.Body", [
            { no: 1, name: "MsgType", kind: "scalar", jsonName: "MsgType", T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "SubType_0", kind: "scalar", jsonName: "SubType0", T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "SubType_1", kind: "scalar", jsonName: "SubType1", T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "MsgSeq", kind: "scalar", jsonName: "MsgSeq", T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "Time", kind: "scalar", jsonName: "Time", T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "MsgID", kind: "scalar", jsonName: "MsgID", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 13, name: "Other", kind: "scalar", jsonName: "Other", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value?: PartialMessage<Body>): Body {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.msgType = 0;
        message.subType0 = 0;
        message.subType1 = 0;
        message.msgSeq = 0;
        message.time = 0;
        message.msgID = 0n;
        message.other = 0;
        if (value !== undefined)
            reflectionMergePartial<Body>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Body): Body {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint32 MsgType = 1 [json_name = "MsgType"];*/ 1:
                    message.msgType = reader.uint32();
                    break;
                case /* uint32 SubType_0 = 2 [json_name = "SubType0"];*/ 2:
                    message.subType0 = reader.uint32();
                    break;
                case /* uint32 SubType_1 = 3 [json_name = "SubType1"];*/ 3:
                    message.subType1 = reader.uint32();
                    break;
                case /* uint32 MsgSeq = 5 [json_name = "MsgSeq"];*/ 5:
                    message.msgSeq = reader.uint32();
                    break;
                case /* uint32 Time = 6 [json_name = "Time"];*/ 6:
                    message.time = reader.uint32();
                    break;
                case /* uint64 MsgID = 12 [json_name = "MsgID"];*/ 12:
                    message.msgID = reader.uint64().toBigInt();
                    break;
                case /* uint32 Other = 13 [json_name = "Other"];*/ 13:
                    message.other = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: Body, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint32 MsgType = 1 [json_name = "MsgType"]; */
        if (message.msgType !== 0)
            writer.tag(1, WireType.Varint).uint32(message.msgType);
        /* uint32 SubType_0 = 2 [json_name = "SubType0"]; */
        if (message.subType0 !== 0)
            writer.tag(2, WireType.Varint).uint32(message.subType0);
        /* uint32 SubType_1 = 3 [json_name = "SubType1"]; */
        if (message.subType1 !== 0)
            writer.tag(3, WireType.Varint).uint32(message.subType1);
        /* uint32 MsgSeq = 5 [json_name = "MsgSeq"]; */
        if (message.msgSeq !== 0)
            writer.tag(5, WireType.Varint).uint32(message.msgSeq);
        /* uint32 Time = 6 [json_name = "Time"]; */
        if (message.time !== 0)
            writer.tag(6, WireType.Varint).uint32(message.time);
        /* uint64 MsgID = 12 [json_name = "MsgID"]; */
        if (message.msgID !== 0n)
            writer.tag(12, WireType.Varint).uint64(message.msgID);
        /* uint32 Other = 13 [json_name = "Other"]; */
        if (message.other !== 0)
            writer.tag(13, WireType.Varint).uint32(message.other);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message SysMessage.Body
 */
export const Body = new Body$Type();