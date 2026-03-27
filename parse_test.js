import { compile } from '@vue/compiler-dom';
import fs from 'fs';
const content = fs.readFileSync('./src/views/admin/finance/invoices/invoices-index.vue', 'utf-8');
try {
  compile(content);
  console.log("No template compilation errors.");
} catch (e) {
  console.error("Template error:", e);
}
