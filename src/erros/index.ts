import { erro } from "../protocols";

export default function notFound(): erro{
    return { name: "NOT_FOUND", message: "not found", status: 404};
};