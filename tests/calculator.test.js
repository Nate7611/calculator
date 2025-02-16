// files tests/calculator.test.js
import { describe, it, expect } from 'vitest';
import { spawn } from 'child_process';
import path from 'path';

function runCalculator(args) {
  return new Promise((resolve, reject) => {
    // Resolve the path to the CLI script.
    const cliPath = path.resolve(__dirname, '../calculator.js');
    // Spawn the CLI process with the provided arguments.
    const proc = spawn('node', [cliPath, ...args], { stdio: 'pipe' });
    let stdout = '';
    let stderr = '';

    proc.stdout.on('data', (data) => {
      stdout += data.toString();
    });

    proc.stderr.on('data', (data) => {
      stderr += data.toString();
    });

    proc.on('close', (code) => {
      resolve({ code, stdout, stderr });
    });

    proc.on('error', (err) => {
      reject(err);
    });
  });
}

describe('Calculator CLI', () => {
  it('should add two numbers correctly', async () => {
    const { code, stdout } = await runCalculator(['2', 'add', '3']);
    expect(code).toBe(0);
    expect(stdout).toMatch(/result:\s*5/);
  });

  it('should subtract two numbers correctly', async () => {
    const { code, stdout } = await runCalculator(['5', 'subtract', '3']);
    expect(code).toBe(0);
    expect(stdout).toMatch(/result:\s*2/);
  });

  it('should multiply two numbers correctly', async () => {
    const { code, stdout } = await runCalculator(['4', 'multiply', '3']);
    expect(code).toBe(0);
    expect(stdout).toMatch(/result:\s*12/);
  });

  it('should multiply (times) two numbers correctly', async () => {
    const { code, stdout } = await runCalculator(['4', 'times', '3']);
    expect(code).toBe(0);
    expect(stdout).toMatch(/result:\s*12/);
  });

  it('should divide two numbers correctly', async () => {
    const { code, stdout } = await runCalculator(['10', 'divide', '2']);
    expect(code).toBe(0);
    expect(stdout).toMatch(/result:\s*5/);
  });

  it('should compute modulus correctly', async () => {
    const { code, stdout } = await runCalculator(['10', 'modulus', '3']);
    expect(code).toBe(0);
    expect(stdout).toMatch(/result:\s*1/);
  });

  it('should compute modulus (remainder) correctly', async () => {
    const { code, stdout } = await runCalculator(['10', 'remainder', '3']);
    expect(code).toBe(0);
    expect(stdout).toMatch(/result:\s*1/);
  });

  it('should compute power correctly', async () => {
    const { code, stdout } = await runCalculator(['2', 'power', '3']);
    expect(code).toBe(0);
    expect(stdout).toMatch(/result:\s*8/);
  });

  it('should display usage error if not enough arguments are provided', async () => {
    const { code, stderr } = await runCalculator(['2', 'add']);
    expect(code).not.toBe(0);
    expect(stderr).toMatch(/usage: node calculator\.js number operator number/);
  });

  it('should display an unknown operation error', async () => {
    const { code, stderr } = await runCalculator(['2', 'foo', '3']);
    expect(code).not.toBe(0);
    expect(stderr).toMatch(/unknown operation/);
  });

  // Additional edge cases

  it('should handle Error: Not a number with an error', async () => {
    const { code, stderr } = await runCalculator(['10', 'divide', '0']);
    expect(code).not.toBe(0);
    expect(stderr).toMatch(/invalid number/i);
  });

  it('should display an error for non-numeric first operand', async () => {
    const { code, stderr } = await runCalculator(['foo', 'add', '3']);
    expect(code).not.toBe(0);
    expect(stderr).toMatch(/invalid number/i);
  });

  it('should display an error for non-numeric second operand', async () => {
    const { code, stderr } = await runCalculator(['3', 'add', 'bar']);
    expect(code).not.toBe(0);
    expect(stderr).toMatch(/invalid number/i);
  });

  it('should add negative numbers correctly', async () => {
    const { code, stdout } = await runCalculator(['-2', 'add', '-3']);
    expect(code).toBe(0);
    expect(stdout).toMatch(/result:\s*-5/);
  });

  it('should compute power with zero exponent correctly', async () => {
    const { code, stdout } = await runCalculator(['5', 'power', '0']);
    expect(code).toBe(0);
    expect(stdout).toMatch(/result:\s*1/);
  });

  it('should compute power with negative exponent correctly', async () => {
    const { code, stdout } = await runCalculator(['2', 'power', '-2']);
    expect(code).toBe(0);
    expect(stdout).toMatch(/result:\s*0\.25/);
  });

  it('should add floating point numbers correctly', async () => {
    const { code, stdout } = await runCalculator(['1.5', 'add', '2.3']);
    expect(code).toBe(0);
    expect(stdout).toMatch(/result:\s*3\.8/);
  });

  it('should multiply with zero correctly', async () => {
    const { code, stdout } = await runCalculator(['5', 'multiply', '0']);
    expect(code).toBe(0);
    expect(stdout).toMatch(/result:\s*0/);
  });

  it('should ignore extra arguments and compute based on the first three', async () => {
    const { code, stdout } = await runCalculator(['2', 'add', '3', 'extra']);
    expect(code).toBe(0);
    expect(stdout).toMatch(/result:\s*5/);
  });

  // Optional test: if your implementation supports case-insensitive operators.
  it('should handle operator in different case (e.g. ADD)', async () => {
    const { code, stdout } = await runCalculator(['2', 'ADD', '3']);
    expect(code).toBe(0);
    expect(stdout).toMatch(/result:\s*5/);
  });
});
