import React, { useState } from 'react';
import { SectionHeader } from '../common/SectionHeader';
import { GlassCard } from '../common/GlassCard';
import { Badge } from '../common/Badge';
import { DB_SCHEMA_TABLES } from '../../data/mockData';
import { Database, Table, Key } from 'lucide-react';

export const DatabaseSchemaView: React.FC = () => {
  const [selectedTable, setSelectedTable] = useState<string>("KnowledgeItems");

  const activeTableObj = DB_SCHEMA_TABLES.find(t => t.name === selectedTable) || DB_SCHEMA_TABLES[2];

  return (
    <div className="space-y-8 pb-12">
      <SectionHeader
        number="17"
        tag="DATA ARCHITECTURE"
        title="Database Schema Inspector"
        subtitle="Visual relational schema mapping PostgreSQL tables, Cypher Graph entities, and Vector embeddings."
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Col: Table Selector List */}
        <GlassCard variant="default" className="space-y-4">
          <div className="flex items-center gap-2 border-b border-surface-border pb-3">
            <Database size={18} className="text-primary" />
            <h3 className="text-sm font-medium font-sans text-primary">Relational Tables</h3>
          </div>

          <div className="space-y-2 font-sans text-xs">
            {DB_SCHEMA_TABLES.map(t => (
              <button
                key={t.name}
                onClick={() => setSelectedTable(t.name)}
                className={`w-full text-left p-3 rounded-2xl border transition-all flex items-center justify-between ${
                  selectedTable === t.name
                    ? 'bg-surface-soft border-surface-border text-primary font-medium shadow-sm'
                    : 'bg-surface border-surface-border text-primary-muted hover:text-primary hover:bg-surface-soft'
                }`}
              >
                <div className="flex items-center gap-2">
                  <Table size={14} className={selectedTable === t.name ? 'text-accent' : 'text-primary-muted'} />
                  <span>{t.name}</span>
                </div>
                <span className={`text-[10px] ${selectedTable === t.name ? 'text-primary' : 'text-primary-muted'}`}>
                  {t.fields.length} Columns
                </span>
              </button>
            ))}
          </div>
        </GlassCard>

        {/* Right 2 Cols: Table Fields & ER Relations Inspector */}
        <GlassCard variant="gold" className="lg:col-span-2 space-y-6">
          <div className="flex items-center justify-between border-b border-accent/30/60 pb-3">
            <div className="flex items-center gap-2">
              <Table size={20} className="text-primary" />
              <h3 className="text-lg font-medium font-sans text-primary">Table: {activeTableObj.name}</h3>
            </div>
            <Badge variant="gold">PostgreSQL 16 + Prisma ORM</Badge>
          </div>

          <div className="space-y-3">
            <span className="text-xs font-sans uppercase text-primary-muted font-medium block">
              Schema Field Definitions
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 font-mono text-xs">
              {activeTableObj.fields.map((f, idx) => (
                <div key={idx} className="p-3.5 rounded-2xl bg-surface border border-surface-border flex items-center gap-2.5 shadow-sm">
                  <Key size={14} className="text-status-warning-text shrink-0" />
                  <span className="text-primary font-medium">{f}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-surface border border-accent/30 text-xs font-sans space-y-2 shadow-sm">
            <span className="text-status-warning-text font-medium block">Foreign Key &amp; Graph Relations</span>
            <p className="text-primary leading-relaxed">
              <code className="bg-accent/10 px-1.5 py-0.5 rounded text-primary font-mono">KnowledgeItems.id</code> connects 1-to-Many with <code className="bg-accent/10 px-1.5 py-0.5 rounded text-primary font-mono">GraphNodes.id</code> and generates embeddings stored in Qdrant Vector Index collection <code className="bg-accent/10 px-1.5 py-0.5 rounded text-primary font-mono">evorig_knowledge_v1</code>.
            </p>
          </div>
        </GlassCard>
      </div>
    </div>
  );
};
