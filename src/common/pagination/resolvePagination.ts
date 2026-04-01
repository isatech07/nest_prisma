import { PaginationDto } from "../dto/pagination.dto";

export function resolvePagination(paginationDto: PaginationDto) {
    return {
        take: paginationDto.limit? paginationDto.limit : 10,
        skip: paginationDto.offset? paginationDto.offset : 0
    };
}