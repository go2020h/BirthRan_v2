import { createClient } from '@supabase/supabase-js';
import { Database } from '@/types/supabase';

// 環境変数が読み込まれない問題を解決するため、直接値を設定
const supabaseUrl = 'https://cdpthzwwczpwlypadhbz.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNkcHRoend3Y3pwd2x5cGFkaGJ6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI3ODc2NzYsImV4cCI6MjA1ODM2MzY3Nn0.woIzlcCR94Niz-WelVqmweSPFqUlTmONrqxTrXl4_z0';

// サービスロールキー（ポリシーをバイパスするための管理者キー）
const supabaseServiceKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNkcHRoend3Y3pwd2x5cGFkaGJ6Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0Mjc4NzY3NiwiZXhwIjoyMDU4MzYzNjc2fQ.YmIov5xt4b1i6zmm-qxK9Mo8c7vPU7F8TPgat4HxK9c';

// 通常のクライアント（匿名ユーザー用）
export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey);

// サービスロールを使用するクライアント（ポリシーをバイパス）
export const supabaseAdmin = createClient<Database>(supabaseUrl, supabaseServiceKey);
