function formatValue(value: string): string;
function formatValue(value: number): string;
function formatValue(value: boolean): string;

function formatValue(value: string | number | boolean): string {
    return String(value);
}